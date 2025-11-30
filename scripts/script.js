const firstNameInput = document.getElementById('firstname');
const lastNameInput = document.getElementById('lastname');
const emailInput = document.getElementById('email');
const selectInput = document.getElementById('select');
const messageInput = document.getElementById('message');
const form = document.getElementById('form');
const submittext = document.getElementById('submittext');

form.onsubmit=(e) => {

    e.preventDefault();
    if (firstNameInput.value == "") {
        alert("First name field must not be empty!") 
    }
    else if (lastNameInput.value == "") {
        alert("Last name field must not be empty!") 
    }
    else if (emailInput.value == "") {
        alert("Email field must not be empty!") 
    }
    else if (selectInput.value == "") {
        alert("Please select a subject!") 
    }
    else if (messageInput.value == "") {
        alert("Message field must not be empty!") 
    }
    else {
        console.log("First Name: ", firstNameInput.value)
        console.log("Last Name: ", lastNameInput.value)
        console.log("Email: ", emailInput.value)
        console.log("Subject: ", selectInput.value)
        console.log("Message: ", messageInput.value)
        form.reset()
        submittext.innerHTML = "<b>Your form has been submitted!</b>"
        
    }
    

}

