import React from 'react';
import { shallow } from 'enzyme';
import "isomorphic-fetch";

import App from '../src/App';

describe('<App />', () => {
  const component = shallow(<App/>);
  const fetch = jest.fn(() => new Promise(resolve => resolve()));

  it('should match with snapshot', () => {
    expect(component.debug()).toMatchSnapshot();
  });

  it('should call getPlanetsAndUpdateState fetch during componentDidMount', () => {
      const instance = component.instance();
      instance.getPlanetsAndUpdateState();
      expect(component.state().length).not.toBe(0);
  });
})