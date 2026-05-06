const btn = document.getElementsByClassName('submit')[0];
const amountElement = document.getElementById('amount');
const yearsElement = document.getElementById('years');
const percentageElement = document.getElementById('percentage');

const amountError = document.getElementsByClassName('amount-error')[0];
const termError = document.getElementsByClassName('term-error')[0];
const rateError = document.getElementsByClassName('rate-error')[0];
const typeError = document.getElementsByClassName('type-error')[0];

const amountInput = document.getElementsByClassName('amount-input')[0];
const amountTerm = document.getElementsByClassName('amount-term')[0];
const amountRate = document.getElementsByClassName('interest-rate')[0];

const isChecked = document.querySelector('input[name="type"]:checked') !==null;

btn.addEventListener('click', (event)=>{
  event.preventDefault();
  checkError(amountElement, amountError, amountInput);
  checkError(yearsElement, termError, amountTerm);
  checkError(percentageElement, rateError, amountRate);
  if (isChecked) {
    typeError.style.display = 'none';
  }else{
    typeError.style.display = 'block';
  }

})

function checkError(param1, param2, param3) {
  if(param1.value === ''){
    param2.style.display = 'block';
    param3.classList.add('error');
  }else{
    param2.style.display = 'none';
    param3.classList.remove('error');
  }
}