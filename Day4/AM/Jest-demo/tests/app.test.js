const app = require('../app');

// test ('should equal 5 when passed 2 and 3', ( ) => {
//     expect(app.add(2,3)).toBe(5);   
// });

// test('should equal 3 when passed 8 and 5' , ( ) => {
//     expect (app.substract(8,5)).toBe(3);
// })

// test ('should equal 6 when passed 2 and 3', ( ) => {
//     expect (app.multiply(2,3)).toBe(6);
// })

// test ('should equal 11 when passed 55 and 5', ( ) => {
//     expect (app.divide(55,5)).toBe(11);
// })
// use NPM TEST to test all outputs

// example 2 Group test

describe('string Tests only', ( ) => {
    test('Should contain the word Stuart', () => {
        expect(app.myArray).toContain('Stuart');
    });
    test('Should not have 16 characters',() => {
        expect(app.myString).not.toHaveLength(15);
    })
});


