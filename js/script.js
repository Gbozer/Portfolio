const form = document.getElementById("myform");
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
        nameError.textContent = "Please correct errors on form!";
        valid = false;

        setTimeout(() =>{
            nameError.textContent ="";
        },3000);
    }
})
