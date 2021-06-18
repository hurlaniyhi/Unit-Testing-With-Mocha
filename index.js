module.exports = {
    greeting: function(){
        return 'Hello'
    },

    numberTest: function(str){
        let answer = ["xyz", "yxz"]
        return {
            str,
            answer
        }
    },
    permutation: function(str){
        let elementToform = factorial(str.length)
        let permutation = ""

        while(elementToform != 0){
            getLetters = generateLetters(str)
            if(!permutation.includes(getLetters)){
                permutation = permutation + `${getLetters}, `
                elementToform--
            }
        }
        return permutation.substring(0, permutation.length - 2)

        function generateLetters(str){
            let generatedLetters = ""
            let chosenLetter
        
            for (let i = 0; i < str.length; i++){
                chosenLetter = str[String(Math.floor(Math.random() * str.length) + 0)]
                if(generatedLetters.includes(chosenLetter)){
                    i--
                }
                else{
                    generatedLetters = generatedLetters + chosenLetter
                }
            }
            return generatedLetters
        }
        
        
        function factorial(number){
            let factorial = 1
        
            while(number != 0){
                factorial = factorial * number;
                number--
            }
            return factorial
        }
        
    }
}