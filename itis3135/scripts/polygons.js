var input = prompt("The angry and ugly fish would like to know your number");
input = parseInt(input);
var result = getShape(input);


alert("You have chosen the "  + result + " polygon shape");






function getShape(val){
    var answer = "";
switch(val){
    case 1:
        answer = "hena";
        break;
    case 2:
        answer = "di";
        break;
    case 3:
        answer = "tri";
        break;
    case 4:
        answer = "tetra";
        break;
    case 5:
        answer = "penta";
        break;
    case 6:
        answer = "hexa";
        break;
    case 7:
        answer = "hepta";
        break;
    case 8:
        answer = "octa";
        break;
    case 9:
        answer = "ennea";
        break; 
    case 10:
        answer = "deca";
        break;  
    } 
    return answer ;
}


// function validateEntry(myMin, myMax){
//     var answer;
	
//     do {
//         answer = prompt("The angry and ugly fish would like to know your number");
//         answer = Number(answer);
//         getShape()
//     }
//     while (answer < 1 || answer > 10 || answer == isNaN(answer));
        
   
//     return;
// }









