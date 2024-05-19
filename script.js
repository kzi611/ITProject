function togglePasswordVisibility() {
  var passwordInput = document.getElementById('password');
  var toggleIcon = document.getElementById('togglePassword');
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleIcon.classList.remove('fa-eye');
    toggleIcon.classList.add('fa-eye-slash');
  } else {
    passwordInput.type = 'password';
    toggleIcon.classList.remove('fa-eye-slash');
    toggleIcon.classList.add('fa-eye');
  }
}

function redirectToHome(event) {
  event.preventDefault();
  // Add form validation or authentication logic here if needed
  window.location.href = 'home.html';
  return false;
}
document.getElementById('logout').addEventListener('click', function() {
  window.location.href = 'index.html';
});
document.getElementById('info').addEventListener('click', function() {
  window.location.href = 'info.html';
});