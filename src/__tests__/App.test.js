import React from 'react';
import { shallow } from 'enzyme';
// components
import App from '../App';
import Layout from '../components/Layout';
import CostumeList from '../containers/CostumeList';

describe('App component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it('should render correctly', () => {
    expect(component.exists()).toBe(true);
  });

  it('should contain one instance of Header', () => {
    expect(component.find(Layout).length).toBe(1);
  });

  it('should contain one instance of CostumeList', () => {
    expect(component.find(CostumeList).length).toBe(1);
  });
});
