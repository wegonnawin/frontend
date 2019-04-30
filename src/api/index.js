import _ from 'lodash';
import {search} from './es';
import bodybuilder from 'bodybuilder';

const INDEX_SENTENCE = 'sentences';

const queryTranslations = async (ids, locale)=>{
  const body = bodybuilder()
  .filter('term', 'locale', locale)
  .filter('ids', 'values', ids)
    .build();

 return search(INDEX_SENTENCE, body,200)
 .then(hits=>hits.map(doc=>doc._source))
}


/**
* [ {id: 1, sentence: 'Hello', link: 2},
* [ {id: 2, sentence: 'こんにちは', link: 1}]
*/

export const queryTopKWithTranslations = async (k, sLocale, tLocale)=>{
  return queryTopK(k, sLocale)
  .then(async (hits)=>{
    const sentences = hits.map(hit=>hit._source);
    const pairs = sentences.map(s=>[s.id, s.links || []]);
    const linksById = _.fromPairs(pairs);
    // pbm: no locale info on links, thus we need all
    const translations = await queryTranslations(_.flatten(_.values(linksById)), tLocale);
    const sourcesFiltered = _.map(sentences, s=>{
      // const linkedIds = _.uniq(_.flatten(s.links));
      const availableIds = _.intersection(linksById[s.id], translations.map(t=>t.id));
      return {
        id: s.id,
        sentence: s.sentence,
        // pick the one exists
        link: _.first(availableIds)
      }
    }).filter(
      s=>!!s.link
    );

    const translationsFiltered = _.map(translations,
       t=>({
         id: t.id,
         sentence: t.sentence,
         link: (_.find(sourcesFiltered, s=>s.link===t.id) || {}).id
       })
     )
     .filter(
       s=>!!s.link
     );

    return _.shuffle(_.take(_.concat(sourcesFiltered, translationsFiltered), k))
  });
}

// limitations as we are not sure about the links ready, we query for more k & filter
const queryTopK = (k, locale)=>{
  let body = bodybuilder()
  .filter('term', 'locale', locale)
  .filter('exists', 'links')
    .query('function_score', {
        functions: [
          {
          "random_score": {
            "seed": 10,
               "field": "_seq_no"
          },
          }
        ]

      })
    .build();

    return search(INDEX_SENTENCE, body, k);
}
