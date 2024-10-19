class StringCalculator{
    constructor(){}

    // Function to implement add operation
    add(numbers){
        try{
            //If the number string is empty then return 0
            if(numbers == ""){
                return 0;
            }
            let sum = 0;
            //Splitting string if \n encountered
            for(let line of numbers.split('\n')){
                //Splitting line if , delimiter encountered
                for(let number of line.split(',')){
                    sum += parseInt(number)
                }
            }
            return sum;
        }
        catch(error){
            return error;
        }
    }
}
module.exports = StringCalculator;