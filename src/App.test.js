import React from 'react'
import { mount } from 'enzyme';
import App from './App';
import { findByTestAttr } from '../test/testUtils'


// Activate global mock to make sure getSecretWord doesn't make network call
jest.mock('./actions');

// Sive we have done the last `mock` this import will be from __mocks__ folder
import { getSecretWord as mockGetSecretWord } from './actions'

// use mount, as useEffect not called on `shallow`
// https://github.com/airbnb/issues/2086
const setup = () => mount(<App />);

test('renders without errors', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent).toHaveLength(1);
});

describe('get Secret Word', () => {
  beforeEach(() => {
    // clear the mock calls from previous tests
    mockGetSecretWord.mockClear();
  })
  test('getSecretWord on app mount', () => {
    const wrapper = setup();

    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });
  test('getSecretWord does not run on app update', () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();
    // using setProps as wrapper.update() doesn't trigger useEffect
    wrapper.setProps();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
})
