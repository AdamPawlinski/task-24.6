import React from 'react';
import PlayerList from './components/PlayerList/PlayerList';
import AddPlayer from './components/AddPlayer/AddPlayer';
import {shallow} from 'enzyme';
import App from './App';

describe('App', () => {
  describe('renders correctly', () => {
    it('renders without crashing', () => {
      shallow(<App />);
    });
  });
  describe('update score', () => {
    it('should update player score', () => {
      const players = [
          {
            name: 'Kunegunda',
            score: 5,
          }
        ]
      const appComponent = shallow(<App />);
      appComponent.setState({ players });
      const onScoreUpdate = appComponent.find(PlayerList).prop('onScoreUpdate');
      onScoreUpdate(0, 5);
      const playersAfterUpdate = appComponent.state().players;
      playersAfterUpdate[0].score;
      expect(playersAfterUpdate).toBeCalledWith(0, 10);
    });
  });
  describe('add player', () => {
    it('should add player name', () => {
      const appComponent = shallow(<App />);
      const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');
      onPlayerAdd('Ania');
      const players = appComponent.state('players');
      expect(players.length).toEqual(1);
      expect(players[0].name).toEqual('Ania');
      expect(players[0].score).toEqual(0);
    });
  });
  describe('remove Player', () => {
    it('should remove player from the state', () => {
      const players = [
          {
            name: 'Kunegunda',
            score: 5,
          }
        ]
      const appComponent = shallow(<App />);
      appComponent.setState({ players });
      const onPlayerRemove = appComponent.find(PlayerList).prop('onPlayerRemove');
      onPlayerRemove(0);
      const playersAfterUpdate = appComponent.state().players;
      expect(players.length).toEqual(0);
    });
  });
});
