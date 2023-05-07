function scriptTest(){

    const nameField = document.getElementById("name").value;
    const feelingField = document.getElementById("feeling").value;
    document.getElementById("output").innerHTML = "Hello " + nameField + ", I'm glad your doing " + feelingField;

}


function alertScary(){

    const  movies = document.getElementById("movie").value;
    document.getElementById("scaryOutput").innerHTML = "The movie you chose was " + movies;

}

function functionTest(){

    const name1Field = document.getElementById("name1").value;
    document.getElementById("alertOutput").innerHTML = ("Welcome is to the website " + name1Field);
}

function alertTest(){
    let age = prompt('Enter your age?');
    alert("You are " + age + " years old!");
}

function alertSecondTest(){
    const name2Field = document.getElementById("name2").value;
    alert("Welcome to the Website " + name2Field + " and I hope you enjoy it.");
}


function dateTime(){
    const date = new Date();
    alert(date);
}
