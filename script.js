
const form = document.getElementById("form");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

//shows error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show success
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

//verify email
function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
        //return true;
      } else {
        showError(input, 'Email is not valid');
        //return false;
      }
}


// Get fieldname
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
  }
// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
      showError(
        input,
        `${getFieldName(input)} must be at least ${min} characters`
      );
      //return false;
    } else if (input.value.length > max) {
      showError(
        input,
        `${getFieldName(input)} must be less than ${max} characters`
      );
      //return false;
    } else {
      showSuccess(input);
      //return true;
    }
  }

function  checkRequired(inputArr){
    inputArr.forEach(function(input){

        if(input.value.trim() === ''){
            showError(input, input.id + " is required");
            //return false;
            
        }
        else{
            showSuccess(input);
            //return true;
        }
    });

}

//alert(username);
form.addEventListener("submit", function(e){
    //e.preventDefault();
    checkRequired([username, email, password]);
    checkEmail(email);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);

});

/*function validate(){
  if (checkRequired([username, email, password]) && checkEmail(email) && checkLength(username, 3, 15) && checkLength(password, 6, 25)){
    window.open("landing.html" );

  }
  return false;

}*/
