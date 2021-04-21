module.exports = {
  ...jest.requireActual('..'),
  __esModule: true,
  // TODO: update return value for Redux / context sections
  getSecretWord: jest.fn().mockReturnValue(Promise.resolve('party'))
}