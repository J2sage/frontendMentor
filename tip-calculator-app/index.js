let tipAmount = document.getElementById('total-tip-figure');
let total = document.getElementById('total-figure');
const billAmount = document.getElementById('bill-amount');
const numberOfPeople = document.getElementById('number');
const errorElement = document.getElementsByClassName('error')[0];
const resetButton = document.getElementById('reset-button');
const custom = document.getElementById('custom');

const percent = document.querySelectorAll('#percentage');

percent.forEach((percentage)=>{
  percentage.addEventListener('click', ()=>{
    crossCheck(numberOfPeople, errorElement);
    percentage.classList.add('active');
    const results = calculateResult(
      parseFloat(billAmount.value),
      parseFloat(percentage.textContent),
      parseFloat(numberOfPeople.value)
    )
    tipAmount.innerHTML = results.tip.toFixed(2);
    total.innerHTML = results.total.toFixed(2);
  })
});

custom.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    crossCheck(numberOfPeople, errorElement);
    percent.forEach((percentage) => {
      percentage.classList.remove('active');
    });
    const customValue = parseFloat(custom.value);
    if (!isNaN(customValue)) {
      const results = calculateResult(
        parseFloat(billAmount.value),
        customValue,
        parseFloat(numberOfPeople.value)
      );
      tipAmount.innerHTML = results.tip.toFixed(2);
      total.innerHTML = results.total.toFixed(2);
    }
  }
});

function crossCheck(param1, param2) {
  if(param1.value === ''){
    param2.style.display = 'block';
  }else{
    param2.style.display = 'none';
  }
}
function calculateResult(bill, percent, number) {
  const tipPercent = percent / 100; // Convert percentage to decimal
  const tip = (bill * tipPercent) / number;
  const total = (bill + (bill * tipPercent)) / number;
  return { tip, total };
}
resetButton.addEventListener('click', ()=>{
  percent.forEach((percentage)=>{
    percentage.classList.remove('active');
  })
  tipAmount.innerHTML = '0.00';
  total.innerHTML = '0.00';
})