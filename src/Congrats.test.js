import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from '../test/testUtils';
import Congrats from './Congrats';

const defaultProps = {success: false, wrongAnsMsg: "wrong Answer"};
const setup = (props = {}) => {
  const setupProp = {...defaultProps, ...props}
  return shallow(<Congrats {...setupProp} />);
}

test('render without errors', () => { // test is Jest API
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1); // `expect() and toBe() are Jest APIs
});
test('renders no text when `success` prop is false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});
test('renders non-empty congrats message when success', () => {
  const wrapper = setup({ success: true });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBeTruthy();
  // expect(component.text().length).not.toBe(0);
});

// PropTypes testing
test('does not throw warning with expected props', () => {
  const expectedProps = { success: true };
  checkProps(Congrats, expectedProps);
});
test('Wrong answer message is string!', () => {
  const expectedProps = { wrongAnsMsg: "10", success: false };
  checkProps(Congrats, expectedProps)
})