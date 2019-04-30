import React from 'react';
import { render } from 'react-dom';

import GamePage from './components/page/GamePage';

global.game2 = true;
if(game2){
  render(
    <GamePage />,
    document.getElementById('app')
  );
}
