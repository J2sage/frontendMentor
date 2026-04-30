const inputElemnt = document.getElementById('email-input');
const btn  = document.getElementById('btn');
const errorMessage = document.getElementsByClassName('error')[0];
const errorIcon = document.getElementsByClassName('error-img')[0];

btn.addEventListener('click', ()=>{
  if(inputElemnt.value.includes('@gmail')){
    errorMessage.style.display = 'none';
    errorIcon.style.display = 'none';
  } else{
    errorMessage.style.display = 'block';
    errorIcon.style.display = 'block';
  }
})