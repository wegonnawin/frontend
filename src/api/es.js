import _ from 'lodash';
import elasticsearch from 'elasticsearch';

export const getClient = async () => {
  return new elasticsearch.Client({
  host: [
    {
      host: 'c60a795f12584b119a21775e028f76ed.us-west1.gcp.cloud.es.io',
      auth:'elastic:iPQLbUngTgn6D948Nuu1awBt',
      protocol: 'https',
      port: '9243'
    }],
  log: 'warning',
  // https://github.com/elastic/elasticsearch-js/issues/196
  requestTimeout: Infinity
});
}

export const search = async (index, body, size=50)=>{
  const client = await getClient();
  return client.search({
      index,
      from: 0,
      size,
      body
  }).then(result=>{
    return result.hits.hits;
  });
}
