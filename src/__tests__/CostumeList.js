import React from 'react';
import { shallow } from 'enzyme';
// components
import { CostumeList } from '../containers/CostumeList';

describe('CostumeList component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<CostumeList />);
  });

  it('should render correctly', () => {
    expect(component.exists()).toBe(true);
  });

  // TODO figure out how to test for this
  // it('should show a list of <Costume />s', () => {});
});
