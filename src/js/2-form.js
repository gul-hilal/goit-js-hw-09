const key = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

let formData = {
  email: '',
  message: '',
};

const savedData = localStorage.getItem(key);
if (savedData) {
  formData = JSON.parse(savedData);
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(key, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (email === '' || message === '') {
    alert('Please fill in all fields!');
    return;
  }

  console.log({ email, message });
  localStorage.removeItem(key);
  form.reset();
});
