import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Deck from './Deck/Deck';
import 'bootstrap/dist/css/bootstrap.min.css';
import Score from './Score/Score';
import ScoreList from './Score/ScoreList';


ReactDOM.render(
  <>
    <Deck />
    <Score />
    <ScoreList />
  </>,
  document.getElementById('root')
);

