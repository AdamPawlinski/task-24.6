import PlayerList from './PlayerList';
import Player from '../Player/Player';
import React from 'react';
import { shallow, mount } from 'enzyme';

describe('Players List', () => {
  describe('renders correctly', () => {
    it('renders without crashing', () => {
    shallow(<PlayerList players={[]} />);
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
      const playerComponent = mount(<PlayerList players={players} />);
      console.log(playerComponent.debug());
      const expectedPlayersNumber = playerComponent.find('Player').length;
      expect(expectedPlayersNumber).toEqual(2);
    });
  });
    describe('updating score', () => {
      it('should update score', () => {
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
        const playerComponent = shallow(<PlayerList players={players} onScoreUpdate={mockedOnScoreUpdate} />);
        const firstPlayer = playerComponent.find(Player).first();
        const onPlayerScoreChange = firstPlayer.prop('onPlayerScoreChange');
        onPlayerScoreChange(10);
        expect(mockedOnScoreUpdate).toBeCalledWith(0, 10);
      });
  });
  describe('removing player', () => {
    it('should remove player', () => {
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
        const mockedOnPlayerRemove = jest.fn();
        const playerComponent = shallow(<PlayerList players={players} onPlayerRemove={mockedOnPlayerRemove} />);
        const firstPlayer = playerComponent.find(Player).first();
        const onPlayerRemoveChange = firstPlayer.prop('playerRemove');
        onPlayerRemoveChange(1);
        expect(mockedOnPlayerRemove).toBeCalled();
      });
  });
});
