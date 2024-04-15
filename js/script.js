const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const nameError = document.getElementById("nameError");
const emailInput = document.getElementById("email");
const emailError= document.getElementById("emailError");

form.addEventListener("submit",function(event){
    event.preventDefault();

    let valid = true;

    nameError.testContent = "";
    emailError.textContent = "";

    if(nameInput.value.trim()===""){
        nameError.textContent = "Hey what is your name?!";
        valid = false;

        setTimeout(()=>{
            nameError.textContent ="";
        },3000);
    }

    const emailPartter = /@.*\.com/;
    if (!emailParttern.test(emailInput)){
        emailError.textContent ="Hey check your email";
        valid = failse;

        setTimeout(() =>{
            emailError.textContent="";
        },3000);
    }
})
