
import '@babel/polyfill'

const { handleSubmit } = require('../js/handleSubmit');

test('button clicked is handled test', () => {

  expect(handleSubmit).toBeDefined();
})