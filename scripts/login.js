/*
function login(){
    var counter = 2;

    if(counter % 2 ==0){
        alert("You have been logged in!");
    }
    else{
        alert("You have been logged out!");
    }
    counter+=1;
}
*/

//Login function
function login(){
    //Set up variables
    var counter = 2;
    var email = document.forms["loginFields"]["email"].value;
    var password = document.forms["loginFields"]["password"].value;
    var loggedin = false;


    //Checks if email field is empty
    if(email == "") {
        alert("Please enter an email address");
    } 
    //Checks if password field is empty
    else if(password == "") {
        alert("Please enter your password");
    }
    //If everything looks ok, logs in
    else if(counter % 2 == 0){
        alert("You have been logged in!");
        loggedin = true;
    }
    else{
        alert("You have been logged out!");
    }
    
}

//Logout function
function logout(){
    //Set up variables
    var loggedin = true;

    //If loggedin, "logs out"
    if(loggedin) {
        alert("You have been logged out!");
        loggedin = false;
    } else {
        alert("There is no one to log in");
    }
}