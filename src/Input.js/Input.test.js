import React from 'react'
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../test/testUtils';
import Input from './Input'

const setup = (secretWord= "party") => shallow(<Input secretWord={secretWord}/>);

it('render without error', () => {
  const wrapper = setup();
  const inputContainer = findByTestAttr(wrapper, 'component-input');
  expect(inputContainer.length).toBe(1);
});
test('does not throw warning with expected props', () => {
  checkProps(Input, {secretWord: 'party'})
})