const assert = require('chai').assert
const app = require('../index')

// describe('App', () => {
//     it("greeting should say Hello", () => {
//         assert.equal(app.greeting(), "Hello")
//     })

//     it("greeting should have five characters", () => {
//         assert.equal(app.greeting().length, 5)
//     })

//     // having a sub-group of test
//     describe("Strict Checks", () => {  
//         it("greeting should be of type string", () => {
//             assert.typeOf(app.greeting(), "string") // you can have your customer message as the third argument
//         })

//         it("output length should be the factorial of the input length", () => {
//             //assert.equal(app.numberTest("xyz").str.length, app.numberTest('xyz').answer.length)
//             //assert.isTrue(app.numberTest("xyz").str.length === 2)
//             assert.isNotTrue(app.numberTest("xyz").str.length === 2)
//         })
//     })
// })



// USING MOCHA WITH CHAI FOR UNIT TESTING
//create a node project using npm init --yes
// install mocha and chai using npm install mocha chai --save-dev
//replace the value of the test key in package.json to mocha || true
// create a test folder in the root folder of the node project

// chaijs.com/api/assert   you will see different method of assert like equal, typeOf e.t.c