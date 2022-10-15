const form = document.querySelector('.form');
const button = document.querySelector('button');
let amount;
let step;
let delay;
let position;

const handleSubmit = event => {
  event.preventDefault();
  let step = Number(form.elements.step.value);
  let amount = Number(form.elements.amount.value);
  let delay = Number(form.elements.delay.value);

  for (let i = 0; i < amount; i++) {
    createPromise(i, delay);
    delay = step + delay;
  }
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
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
