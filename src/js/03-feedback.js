import throttle from 'lodash.throttle';

const KEY_STORAGE = 'feedback-form-state';
const ref = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};

const formData = JSON.parse(localStorage.getItem(KEY_STORAGE)) || {
  email: '',
  message: '',
};

getFormInput();

ref.form.addEventListener('submit', onFormSubmit);
ref.form.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(event) {
  event.preventDefault();
  console.log(formData);
  event.currentTarget.reset();
  localStorage.removeItem(KEY_STORAGE);
  formData.email = '';
  formData.message = '';
}

function onFormInput(event) {
  console.log(formData);
  formData[event.target.name] = event.target.value;
  localStorage.setItem(KEY_STORAGE, JSON.stringify(formData));
}

function getFormInput() {
  const { email, message } = formData;
  ref.email.value = email;
  ref.message.value = message;
}
