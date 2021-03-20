import React from 'react'
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils';
import GuessedWords from './GuessedWords'

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
}

export const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<GuessedWords {...setupProps} />)
}

test('does not throw warning with expected props', () => {
  checkProps(GuessedWords, defaultProps)
});
describe('is there are no words guessed', () => {
  let wrapper;
  beforeEach(() => wrapper = setup({ guessedWords: [] }));

  test('renders without errors', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });
  test('renders instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions');
    expect(instructions.text().length).not.toBe(0);
  });
});

describe('if there is words guessed', () => {
  let guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3 },
  ];
  let wrapper;
  beforeEach(() => wrapper = setup(guessedWords));
  test('renders without errors', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });
  test('renders guessed words section ', () => {
    const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
    expect(guessedWordsNode.length).toBe(1); // number of its nodes (children)
  });
  test('correct number of guessed words', () => {
    const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word');
    // guessedWordsNodes.length -> number of its nodes(number of tds on the tr of `guessed-word)
    expect(guessedWordNodes.length).toBe(guessedWords.length) 
  })
})