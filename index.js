document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('notify');
  const emailField = document.getElementById('email');
  const emailError = document.getElementById('email-error');
  const successMessage = document.getElementById('success-message');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent form submission
    const email = emailField.value.trim();

    if (!email) {
      emailError.innerText = 'Whoops! It looks like you forgot to add your email';
      emailError.style.display = 'block';
      emailField.classList.add('input-error'); // add class to input field
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
      emailError.innerText = 'Please provide a valid email address';
      emailError.style.display = 'block';
      emailField.classList.add('input-error'); // add class to input field
      return;
    }

    // adding comment here for testing
    // if validation passes, hide form elements and show success message
    form.style.display = 'none';
    successMessage.style.display = 'block';
  });
});
