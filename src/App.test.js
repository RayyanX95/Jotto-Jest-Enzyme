import React from 'react'
import { shallow } from 'enzyme';
import App from './App';
import { findByTestAttr } from '../test/testUtils'

const setup = () => shallow(<App />);

test('renders without errors', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent).toHaveLength(1);
});
