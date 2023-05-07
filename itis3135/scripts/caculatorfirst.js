function add(){
    
    const number = document.getElementById("numberOne").value;
    const newNumber = parseInt(number);

    const secondNumber = document.getElementById("numberTwo").value;
    const secondNewNumber = parseInt(secondNumber);

    const answer = newNumber + secondNewNumber;

    document.getElementById("Output").innerHTML = ("Your answer is " + answer);
}


function division(){
    
    var number = document.getElementById("numberOne").value;
    var newNumber = parseInt(number);

    var secondNumber = document.getElementById("numberTwo").value;
    var secondNewNumber = parseInt(secondNumber);

    var answer = newNumber / secondNewNumber;

    document.getElementById("Output").innerHTML = ("Your answer is " + answer);



}



function minus(){
    
    const number = document.getElementById("numberOne").value;
    const newNumber = parseInt(number);

    const secondNumber = document.getElementById("numberTwo").value;
    const secondNewNumber = parseInt(secondNumber);

    const answer = newNumber - secondNewNumber;

    document.getElementById("Output").innerHTML = ("Your answer is " + answer);
}

function mulit(){
    
    const multiNumber = document.getElementById("numberOne").value;
    const multiNewNumber = parseInt(multiNumber);

    const secondmultiNumber = document.getElementById("numberTwo").value;
    const newMultiNumber = parseInt(secondmultiNumber);

    const answerFour = multiNewNumber - newMultiNumber;

    document.getElementById("multiOutput").innerHTML = ("Your answer is " + answerFour);
}