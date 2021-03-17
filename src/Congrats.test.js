import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

import { findByTestAttr } from '../test/testUtils';
import SayWellDone from './Congrats';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}) => shallow(<SayWellDone {...props} />);

test('render without errors', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1)
});
test('renders no text when `success` prop is false', () => {
  const wrapper = setup({success: false});
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});
test('renders non-empty congrats message when success', ()=>{
  const wrapper = setup({success: true});
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBeTruthy();
  // expect(component.text().length).not.toBe(0);
});