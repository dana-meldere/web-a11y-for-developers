const openModalBtn = document.querySelector('#openModalBtn');
const closeModalBtn = document.querySelector('#closeModalBtn');
const modal = document.querySelector('#modal');
const signupForm = document.querySelector('#signupForm');

const fullNameInput = document.querySelector('#fullName');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirmPassword');
const termsInput = document.querySelector('#terms');

const fullNameError = document.querySelector('#fullNameError');
const emailError = document.querySelector('#emailError');
const passwordError = document.querySelector('#passwordError');
const confirmPasswordError = document.querySelector('#confirmPasswordError');
const termsError = document.querySelector('#termsError');

const successMessage = document.querySelector('#successMessage');

function openModal() {
  modal.hidden = false;
  successMessage.hidden = true;
  fullNameInput.focus();
}

function closeModal() {
  modal.hidden = true;
}

function setError(input, errorElement, hasError) {
  input.setAttribute('aria-invalid', hasError ? 'true' : 'false');
  errorElement.hidden = !hasError;
}

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modal.hidden) {
    closeModal();
  }
});

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const isFullNameInvalid = fullNameInput.value.trim() === '';
  const isEmailInvalid =
    emailInput.value.trim() === '' || !emailInput.validity.valid;
  const isPasswordInvalid = passwordInput.value.trim() === '';
  const isConfirmPasswordInvalid =
    confirmPasswordInput.value.trim() === '' ||
    confirmPasswordInput.value !== passwordInput.value;
  const isTermsInvalid = !termsInput.checked;

  setError(fullNameInput, fullNameError, isFullNameInvalid);
  setError(emailInput, emailError, isEmailInvalid);
  setError(passwordInput, passwordError, isPasswordInvalid);
  setError(confirmPasswordInput, confirmPasswordError, isConfirmPasswordInvalid);
  setError(termsInput, termsError, isTermsInvalid);

  const formIsValid =
    !isFullNameInvalid &&
    !isEmailInvalid &&
    !isPasswordInvalid &&
    !isConfirmPasswordInvalid &&
    !isTermsInvalid;

  if (isFullNameInvalid) {
  fullNameInput.focus();
} else if (isEmailInvalid) {
  emailInput.focus();
} else if (isPasswordInvalid) {
  passwordInput.focus();
} else if (isConfirmPasswordInvalid) {
  confirmPasswordInput.focus();
} else if (isTermsInvalid) {
  termsInput.focus();
}
  
    if (!formIsValid) {
    return;
  }

  closeModal();
  successMessage.hidden = false;
  signupForm.reset();
});