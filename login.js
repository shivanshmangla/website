const validUsers = ['shiva', 'user2'];
const validPasswords = ['pss', 'password2'];

document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const usernameInput = document.getElementById('username').value;
  const passwordInput = document.getElementById('password').value;

  const userIndex = validUsers.indexOf(usernameInput);
  if (userIndex !== -1 && validPasswords[userIndex] === passwordInput) {
    // Store the username in local storage upon successful login
    localStorage.setItem('username', usernameInput);
    showMessage('Login successful!', 'success');

    // Redirect to the dashboard page
    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 1000);
  } else {
    showMessage('Invalid username or password.', 'error');
  }
});

function showMessage(message, type) {
  const messageDiv = document.getElementById('message');
  messageDiv.textContent = message;
  messageDiv.style.color = type === 'success' ? 'green' : 'red';
}

// Additional JavaScript for animations
const loginForm = document.getElementById('loginForm');
const loginButton = document.getElementById('loginButton');

loginForm.style.opacity = '0';
loginForm.style.transform = 'translateY(50px)';
loginButton.style.opacity = '0';

setTimeout(() => {
  loginForm.style.opacity = '1';
  loginForm.style.transform = 'translateY(0)';
  loginButton.style.opacity = '1';
}, 500);
