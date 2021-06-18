const assert = require('chai').assert
const app = require('../index')

let input = 'xyz'

describe("Permutation tests", function () {
    it("should return a string", () => {
        assert.typeOf(app.permutation(input), "string")
    })

    it("Number of possible combination should be factorial of input", () => {
        let result = app.permutation(input).split(',')
        assert.equal(result.length, factorial(input.length))
    })

    it("Each combination must have all the input characters included", () => {
        let result = app.permutation(input).split(',')
        for(let check of result){
            var sortedCheck = check  // variable declared with var will be accessible out the block it is defined
            input = input.split("").sort().join("")
            sortedCheck = check.split("").sort().join("").replace(/ /g, "")
            if(sortedCheck != input) break;
        }

        assert.equal(input, sortedCheck)
    })

    it("Output should not have duplicate combination", () => {
        let result = app.permutation(input).split(',')
        let exist = false
        let checkedCombination = ""
       
        for(let check of result){
            if(!checkedCombination.includes(`${check},`)){
                checkedCombination = `${checkedCombination} ${check},`
            }
            else{
                exist = true
                break;
            }
        }

        assert.isFalse(exist)
       
    })
})

function factorial(number){
    let factorial = 1

    while(number != 0){
        factorial = factorial * number;
        number--
    }
    return factorial
}