const form = document.querySelector('.form');
const button = document.querySelector('button');
let amount;
let step;
let delay;
let position;

const handleSubmit = event => {
  event.preventDefault();
  const delay = form.elements.delay.value;
  const step = form.elements.step.value;
  const amount = form.elements.amount.value;
  console.log(delay);
  numberOfPromises(amount);
};

const numberOfPromises = amount => {
  for (let i = 0; i < amount; i++) {
    let position = i;
    const delay = form.elements.delay.value;
    createPromise(position, delay);
  }
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  console.log(shouldResolve);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve('success');
      } else {
        reject('error');
      }
    }, delay);
  });
  promise
    .then(({ position, delay }) => {
      console.log(`Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`Rejected promise ${position} in ${delay}ms`);
    });
}
form.addEventListener('submit', handleSubmit);
