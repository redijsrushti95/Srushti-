document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Validate if passwords match
  if (password !== confirmPassword) {
    alert("Passwords don't match!");
    return;
  }

  // Perform registration logic (e.g., send data to server or perform client-side validation)
  // Replace the following console log with actual registration logic
  console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);
});
