// set in env
const PAGE_PASSWORD = 'FRING2022';
const LOADING_TIME = 1000;

const passwordForm = document.getElementById('password-form');
const passwordProtectedContent = document.getElementById(
  'password-protected-content'
);
const passwordFormInput = document.getElementById('password-form-input');
const passwordSubmitButton = document.getElementById('password-submit-button');

const loaderComponent = document.getElementById('loader-component');

passwordSubmitButton.addEventListener('click', (e) => {
  loaderComponent.classList.toggle('hidden-content');
  if (passwordFormInput.value === PAGE_PASSWORD) {
    setTimeout(() => {
      passwordForm.classList.toggle('hidden-content');
      passwordProtectedContent.classList.toggle('hidden-content');
      loaderComponent.classList.toggle('hidden-content');
    }, LOADING_TIME);
  } else {
    setTimeout(() => {
      loaderComponent.classList.toggle('hidden-content');
      passwordFormInput.value = '';
      alert('Please input correct password');
    }, LOADING_TIME);
  }
});
