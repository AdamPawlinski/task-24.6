import AddPlayer from './AddPlayer';
import React from 'react';
import { shallow, mount } from 'enzyme';

describe('Add player', () => {
  describe('renders correctly', () => {
    it('renders without crashing', () => {
    shallow(<AddPlayer />);
    });
  });
  describe('add player to table', () => {
    it('should add player name', () => {
      const onPlayerAdd  = jest.fn();
      const addPlayerComponent = mount(<AddPlayer onPlayerAdd={onPlayerAdd }/>);
      const nameInput = addPlayerComponent.find('input').first().getDOMNode();
      nameInput.value = 'Ania';
      expect(onPlayerAdd).toBeCalledWith('Ania');
    });
  });
});
