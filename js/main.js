/* Steps:
1. Get first number from doc
2. Get second number from dog
3. Add the numbers together
4. Display 
*/

//Make a variable to store index value of math type chosen
//Use that variable to do fancy maths 

function mathNums(){
    var mathType = document.getElementById("mathSelect").selectedIndex;
    var numOne = parseFloat(document.getElementById("numberOne").value);
    var numTwo = parseFloat(document.getElementById("numberTwo").value);

    if(isNaN(numOne) || isNaN(numTwo)){
        result = "Whoops, something looks wrong there";
    } else if (mathType === 0) {
        result = numOne + numTwo;
    } else if (mathType === 1) {
        result = numOne - numTwo;
    } else if (mathType === 2) {
        result = numOne * numTwo
    } else if (mathType === 3) {
        if (numTwo == 0) {
            result = "You try to divide by 0 often? Not the best"
        } else {
        result = numOne / numTwo
        }; //end if
    }; //end if
    return result;
}; //end function

function displayResult(){
    var output = mathNums();
    document.getElementById("numberOutput").innerHTML = output;
};


