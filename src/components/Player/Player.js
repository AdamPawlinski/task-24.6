import React from 'react';
import './Player.css';

const Player = (props) => (
  <li className="Player">
    <span className="Player__name">{props.name}</span>
    <span className="Player__score">{props.score}</span>
    <span className="Player__button" onClick={() => props.onPlayerScoreChange(1)} >+</span>
    <span className="Player__button" onClick={() => props.onPlayerScoreChange(-1)} >-</span>
    <span className="removePlayer__button" onClick={() => props.onPlayerRemoveChange(props.key)} >remove player</span>
  </li>
);

export default Player;
