document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Clear previous error and success messages
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('subjectError').textContent = '';
  document.getElementById('messageError').textContent = '';
  document.getElementById('successMessage').textContent = '';

  // Get values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  let isValid = true;

  // Validate Name
  if (name.length < 2) {
    document.getElementById('nameError').textContent = 'Please enter a valid name.';
    isValid = false;
  }

  // Validate Email
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  // Validate Subject
  if (subject === '') {
    document.getElementById('subjectError').textContent = 'Subject cannot be empty.';
    isValid = false;
  }

  // Validate Message
  if (message.length < 10) {
    document.getElementById('messageError').textContent = 'Message should be at least 10 characters long.';
    isValid = false;
  }

  if (isValid) {
    document.getElementById('successMessage').textContent = 'Form submitted successfully!';
    // Reset form fields (optional)
    document.getElementById('contactForm').reset();
  }
});
