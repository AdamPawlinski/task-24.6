import Player from './PlayerList';
import Player from '../components/Player/Player';
import React from 'react';
import { shallow, mount } from 'enzyme';

describe('Players List', () => {
  describe('renders correctly', () => {
    it('renders without crashing', () => {
    shallow(<PlayersList players={[]} />);
    });
  });
  describe('showing players', () => {
    it('should show 2 players on the list', () => {
      const players = [
        {
            name: 'Kunegunda',
            score: 5
        },
        {
            name: 'Antoś',
            score: 0
        }
      ]
      const playerComponent = mount(<PlayersList players={players} />);
      console.log(playerComponent.debug());
      const expectedPlayersNumber = playerComponent.find('Player').length;
      expect(expectedPlayersNumber).toEqual(2);
    });
  });
    describe('updating score', () => {
      it('should show 2 players on the list', () => {
        const players = [
            {
                name: 'Kunegunda',
                score: 5
            },
            {
                name: 'Antoś',
                score: 0
            }
        ]
        const mockedOnScoreUpdate = jest.fn();
        const playerComponent = shallow(<PlayersList players={players} onScoreUpdate={mockedOnScoreUpdate} />);
        const firstPlayer = playerComponent.find(Player).first();
        const onPlayerScoreChange = firstPlayer.prop('onPlayerScoreChange');
        onPlayerScoreChange(10);
        expect(mockedOnScoreUpdate).toBeCalledWith(0, 10);
      });
  });
});
