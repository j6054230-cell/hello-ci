// calculator.js dan funksiyani chaqirib olamiz
const { add } = require('../src/calculator'); 

test('add(2, 3) = 5 qaytarishi kerak', () => {
    expect(add(2, 3)).toBe(5);
});

