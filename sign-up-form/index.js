const bttn = document.getElementById('btn');
const firstName = document.getElementById('first');
const nameError = document.getElementById('name-error');
const nameErrorIcon = document.getElementById('name-error-icon');
const lastName = document.getElementById('last');
const lastNameError = document.getElementById('last-error');
const lastErrorIcon = document.getElementById('last-error-icon');
const email = document.getElementById('email');
const emailError = document.getElementById('email-error');
const emailErrorIcon = document.getElementById('email-error-icon');
const password = document.getElementById('password');
const passwordError = document.getElementById('password-error');
const passwordErrorIcon = document.getElementById('password-error-icon');
// const formElement = document.getElementsByClassName('container')[0];
// const errorElement = document.getElementsByClassName('error')[0];

bttn.addEventListener('click', (event)=>{
  event.preventDefault();
  checkError(firstName, nameError, nameErrorIcon);
  checkError(lastName, lastNameError, lastErrorIcon);
  checkEmail(email, emailError, emailErrorIcon);
  checkError(password, passwordError, passwordErrorIcon);
})

function checkError(first, second, third) {
  if(first.value === ''){
    second.style.display = 'block';
    third.style.display = 'block';
    first.style.border = '1px solid red';
  }else{
    second.style.display = 'none';
    third.style.display = 'none';
    first.classList.remove('input-error');
    first.style.border = '1px solid hsl(246, 25%, 77%)';
  }
}
function checkEmail(first, second, third) {
  if(first.value.includes('@gmail') && first.value !== ''){
    second.style.display = 'none';
    third.style.display = 'none';
    first.style.border = '1px solid hsl(246, 25%, 77%)';
  }else{
    second.style.display = 'block';
    third.style.display = 'block';
    first.style.border = '1px solid red';
  }
}
