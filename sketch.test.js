
const sum = require('./sketch');

test('Adds two numbers',sumTest)

function sumTest(){
    expect(sum(1,2)).toBe(3);
}