
const { checkValidURL } = require('../js/checkValidURL');

test('check if the entered url is right and valid or not', () => {
    expect(checkValidURL('Hey There')).toBeFalsy();
    expect(checkValidURL('https://en.wikipedia.org/wiki/Bill_Gates')).toBeTruthy();
    expect(checkValidURL('https://en.wikipedia.org/wiki/Nelson_Mandela')).toBeTruthy();
    expect(checkValidURL('https://en.wikipedia.org/wiki/Nirvana_(band)')).toBeTruthy();
});