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
            //Check if string starts with //
            if(numbers.startsWith('//')){
                let first_new_line_index = numbers.indexOf('\n');
                //Fetching new delimiter
                let new_delimiter = numbers.slice(2, first_new_line_index);
                numbers = numbers.slice(numbers.indexOf('\n') + 1);
                for(let line of numbers.split('\n')){
                    for(let number of line.split(new_delimiter)){
                        sum += parseInt(number)
                    }
                }
            }
            else{
                //Splitting string if \n encountered
                for(let line of numbers.split('\n')){
                    //Splitting line if , delimiter encountered
                    for(let number of line.split(',')){
                        sum += parseInt(number)
                    }
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