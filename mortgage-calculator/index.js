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

const emptyElement = document.getElementsByClassName('empty')[0];
const resultElement = document.getElementsByClassName('result')[0];

let monthlyElement = document.getElementById('monthly');
let totalElement = document.getElementById('total');

btn.addEventListener('click', (event)=>{
  event.preventDefault();
  checkError(amountElement, amountError, amountInput);
  checkError(yearsElement, termError, amountTerm);
  checkError(percentageElement, rateError, amountRate);
  const checkedRadio = document.querySelector('input[name="type"]:checked') ;

  if (checkedRadio) {
    typeError.style.display = 'none';
    console.log('Checked radio button value:', checkedRadio.value);
  }else{
    typeError.style.display = 'block';
    console.log('No radio button is checked.');
  }
  if (checkedRadio && amountElement.value && yearsElement.value && percentageElement.value) {
    const results = calculateMortgage(
      parseFloat(amountElement.value),
      parseFloat(percentageElement.value),
      parseFloat(yearsElement.value),
      checkedRadio.value
    );
  }

  showResult(amountElement, yearsElement, percentageElement, checkedRadio, emptyElement, resultElement);
})

function calculateMortgage(principal, annualRate, years, mortgageType) {
  const monthlyRate = annualRate / 100 / 12;
  const numberOfPayments = years * 12;

  if (mortgageType === 'repayment') {
    // Standard mortgage payment
    const monthlyPayment = principal * 
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    const totalRepayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalRepayment - principal;

    monthlyElement.innerHTML = `$` + monthlyPayment.toFixed(2);
    totalElement.innerHTML = `$` + totalRepayment.toFixed(2);

    
  } else if (mortgageType === 'interestOnly') {
    // Interest-only payment
    const monthlyPayment = principal * monthlyRate;
    const totalInterest = monthlyPayment * numberOfPayments;

    monthlyElement.innerHTML = `$` + monthlyPayment.toFixed(2);
    totalElement.innerHTML = `$` + totalInterest.toFixed(2);

    
  }
}

function checkError(param1, param2, param3) {
  if(param1.value === ''){
    param2.style.display = 'block';
    param3.classList.add('error');
  }else{
    param2.style.display = 'none';
    param3.classList.remove('error');
  }
}
function showResult(param1, param2, param3, param4, param5, param6) {
  if (param1.value !== '' && param2.value !== '' && param3.value !== '' && param4.value !== '') {
    param5.style.display = 'none';
    param6.style.display = 'block';
  } else {
    param5.style.display = 'flex';
    param6.style.display = 'none';
  }
}