import Player from './Player';
import React from 'react';
import { shallow } from 'enzyme';

describe('Player', () => {
  describe('renders correctly', () => {
    it('renders without crashing', () => {
    shallow(<Player />);
    });
  });
  describe('renders Player name', () => {
    it('renders correct name', () => {
      const playerNamePassed = 'Ania';
      const playerComponent = shallow(<Player name={playerNamePassed} />);

      const playerNameRendered = playerComponent.find('.Player__name').text();

      expect(playerNameRendered).toEqual(playerNamePassed);
    });
  });
  describe('renders Player score', () => {
    it('renders correct name', () => {
      const playerScorePassed = 23;
      const playerComponent = shallow(<Player score={playerScorePassed} />);

      const playerScoreRendered = playerComponent.find('.Player__score').text();
      const playerScoreNumber = Number(playerScoreRendered);

      expect(playerScoreNumber).toEqual(playerScorePassed);
    });
  });
  describe('changes PLayer score +1', () => {
    it('should add 1 to Player score when clicked', () => {
      const mockedOnPlayerScoreChange = jest.fn();
      const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);
      const plusButton = playerComponent.find('.Player__button').first();
      plusButton.simulate('click');

      expect(mockedOnPlayerScoreChange).toBeCalledWith(1);
    });
  });
  describe('changes PLayer score -1', () => {
    it('should minus 1 to Player score when clicked', () => {
      const mockedOnPlayerScoreChange = jest.fn();
      const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);
      const minusButton = playerComponent.find('.Player__button').last();
      minusButton.simulate('click');
      expect(mockedOnPlayerScoreChange).toBeCalledWith(-1);
    });
  });
});
