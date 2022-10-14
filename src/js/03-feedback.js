const KEY_STORAGE = 'feedback-form-state';
const refForm = document.querySelector('.feedback-form');
console.log(refForm);

const refTextarea = document.querySelector('.feedback-form textarea');
console.log(refTextarea);

refForm.addEventListener('submit', onFormSubmit);
refTextarea.addEventListener('input', onTextareaInput);

getTextarea();

function onFormSubmit(event) {
  event.preventDefault();
  console.log('helo form!');
  event.currentTarget.reset();
}

function onTextareaInput(event) {
  const message = event.target.value;
  localStorage.setItem(KEY_STORAGE, message);
  console.log(message);
}

function getTextarea() {
  const savedMessage = localStorage.getItem(KEY_STORAGE);

  if (savedMessage) {
    console.log(savedMessage);
    refTextarea.value = savedMessage;
  }
}
