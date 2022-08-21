import throttle from 'lodash.throttle';


 const INPUT_KEY = 'feedback-form-state';

 const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('[name=email]'),
  text: document.querySelector('[name=message]'),
};

refs.form.addEventListener('input', throttle(onFormData, 300));
refs.form.addEventListener('submit', onSubmitForm);

const formData = {};
dataFromLocalStorage()

function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(INPUT_KEY, JSON.stringify(formData));
}

function onSubmitForm(e) {
  console.log(JSON.parse(localStorage.getItem(INPUT_KEY)));
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(INPUT_KEY);
}

function dataFromLocalStorage() {
  const save = JSON.parse(localStorage.getItem(INPUT_KEY));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (save) {
    email.value = save.email;
    message.value = save.message;
  }
};