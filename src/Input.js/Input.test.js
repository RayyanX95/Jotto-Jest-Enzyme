import React from 'react'
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../test/testUtils';
import Input from './Input';

// ==> mock entire module for structuring useState on import //
// const mockSetCurrentGuess = jest.fn();
// jest.mock('react', () => ({
// 	...jest.requirActual('react'),
// 	useState: (initialState) => [initialSate, mockCurrentGuess]
// }));

const setup = (secretWord = "party") => shallow(<Input secretWord={secretWord} />);

it('render without error', () => {
  const wrapper = setup();
  const inputContainer = findByTestAttr(wrapper, 'component-input');
  expect(inputContainer.length).toBe(1);
});

test('does not throw warning with expected props', () => {
  checkProps(Input, { secretWord: 'party' })
})

describe('state controlled input field', () => {
  let mockSetCurrentGuess = jest.fn(); // Create mock function
  let wrapper;
  let originalUseState;
  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    originalUseState = React.useState;
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setup();
  })
  afterEach|(() => {
    React.useState = originalUseState;
  });

  test('state updates with value of input box upon change', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box');
    // The effect of these two line is simulating input box getting a value of `train`
    const mockEvent = { target: { value: 'train' } };
    inputBox.simulate('change', mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });

  test('Clear state when Submit button clicked', () => {
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    // This Line simulate the 'Submit' button get clicked
    submitButton.simulate('click', {preventDefault(){}});
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  })
})

// 61