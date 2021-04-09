import moxios from 'moxios';
import { getSecretWord } from './index'

describe('getSecretWord', () => {
  beforeEach(() => {
    moxios.install(); // tell axios to send req to moxios not to http
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test('secretWord is returned', () => {
    moxios.wait(() => {
      const req = moxios.requests.mostRecent();
      req.respondWith({
        status: 200,
        response: 'party'
      });
    });
    // update to test app in Redux / context sections
    return getSecretWord()
      .then((secretWord) => {
        expect(secretWord).toBe('party');
      });
  })
})