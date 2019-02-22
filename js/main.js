/* Steps:
1. Get first number from doc
2. Get second number from dog
3. Add the numbers together
4. Display 
*/

function addNums(){
    var numOne = parseFloat(document.getElementById("numberOne").value);
    var numTwo = parseFloat(document.getElementById("numberTwo").value);
    sum = numOne + numTwo;
    return sum;
};

function displaySum(){
    var output = addNums();
    document.getElementById("numberOutput").innerHTML = output;
};
