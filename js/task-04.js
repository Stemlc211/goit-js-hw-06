
let counterValue = 0;


const valueEl = document.getElementById('value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');


decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  updateCounter();
});

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  updateCounter();
});


function updateCounter() {
  valueEl.textContent = counterValue;
}