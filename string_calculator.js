class StringCalculator{
    constructor(){}

    // Function to implement add operation
    add(numbers){
        try{
            //If the number string is empty then return 0
            if(numbers == ""){
                return 0;
            }
            let numbers_list = numbers.split(',');
            let sum = 0;
            for(let number of numbers_list){
                sum += parseInt(number)
            }
            return sum;
        }
        catch(error){
            return error;
        }
    }
}
module.exports = StringCalculator;