//get the value/string from the page
//controller function
function getString() {

    document.getElementById('alert').classList.add('invisible')

    let userString = document.getElementById('userString').value;

    let revString = reverseString(userString);

    displayString(revString);


}

//reverse the string 
//logic function
function reverseString(userString) {

    let revString = [];
   
    
    //let name = Basch
    //name[0] = "B";
    //name[4] = "h";
    // last position in an array name.length -1

    //reverse a string using a for loop
    for (let index = userString.length - 1; index >= 0; index--) {
        
        revString += userString[index];
        
    }

    return revString;

}

//display the reversed string to the user 
//view function
function displayString(revString) {

    //write msg to the page
    document.getElementById('msg').innerHTML = `Your string reversed is: <b> ${revString} </b>`;
    //turn on/show the alert box
    document.getElementById('alert').classList.remove('invisible');

}

