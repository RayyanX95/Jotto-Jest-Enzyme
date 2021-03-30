import React from 'react'
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../test/testUtils';
import Input from './Input'

const setup = () => shallow(<Input />);

it('render without error', () => {
  const wrapper = setup();
  const inputContainer = findByTestAttr(wrapper, 'component-input');
  expect(inputContainer.length).toBe(1);
})