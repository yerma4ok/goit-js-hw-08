import throttle from 'lodash.throttle';


const INPUT_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name=email]');
const text = document.querySelector('[name=message]');


form.addEventListener(
  'input',
  throttle(e => {
    const objectToSave = { email: email.value, message: text.value };
    localStorage.setItem(INPUT_KEY, JSON.stringify(objectToSave));
  }, 500)
);

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log({ email: email.value, message: text.value });
  form.reset();
  localStorage.removeItem(INPUT_KEY);
});

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const saveDate = load(INPUT_KEY);
if (saveDate) {
  email.value = saveDate.email;
  text.value = saveDate.message;
}