import React from 'react'
import { mount } from 'enzyme'

import App from './App';
import { findByTestAttr } from '../test/testUtils';

const setup = (state = {}) => {
  // TODO: apply state 
  const wrapper = mount(<App />);
  // add value to input box 
  const inputBox = findByTestAttr(wrapper, 'input-box');
  inputBox.simulate('change', { target: { value: 'train' } });
  // simulate click on submit button      
  const submitButton = findByTestAttr(wrapper, 'submit-button');
  submitButton.simulate('click', { preventDefault() { } });
  return wrapper;
}

describe.skip('no words guessed', () => {
  let wrapper
  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: [],
    })
  });
  test('create a GuessedWords table with one row', () => {
    const guessedWordRows = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordRows).toHaveLength(1);
  })
});

describe.skip('some words guessed', () => {
  let wrapper
  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: [{ guessedWord: 'agile', letterMatchCount: 1 }],
    })
  });
  test('create a GuessedWords table with one row', () => {
    const guessedWordRows = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordRows).toHaveLength(2);
  })
});

describe('describe.skip to test todo() method', () => {
  test.todo('test to todo() method')
})

describe.skip('some secret guessed', () => {
  let wrapper = setup({
    secretWord: 'party',
    success: false,
    guessedWords: [{ guessedWord: 'agile', letterMatchCount: 1 }],
  })
  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: true,
      guessedWords: [{ guessedWord: 'agile', letterMatchCount: 1 }],
    })
  });
  // add value to input inputBox
  const inputBox = findByTestAttr(wrapper, 'input-box');
  const mockEvent = { target: { value: 'party' }};
  inputBox.simulate('change', mockEvent);
  // simulate click on submit button
  const submitButton = findByTestAttr(wrapper, 'submit-button');
  submitButton.simulate('click', {preventDefault() {}});

  test('adds row to guessWords table', () => {
    const guessedWordRows = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordRows).toHaveLength(3);
  });
  test('display congrats components', () => {
    const congrats = findByTestAttr(wrapper, 'component-congrats');
    expect(congrats.text().length).toBeGreaterThan(0);
  });
  test('does bot show input component contents', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box');
    expect(inputBox.exists()).toBe(false);

    const submitButton = findByTestAttr(wrapper, 'submit-button');
    expect(submitButton.exists()).toBe(false);
  })
})
