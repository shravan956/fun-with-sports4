document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let errorMessage = '';
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Basic validation
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        errorMessage = 'All fields are required.';
    } else if (password !== confirmPassword) {
        errorMessage = 'Passwords do not match.';
    } else if (!validateEmail(email)) {
        errorMessage = 'Please enter a valid email address.';
    }

    if (errorMessage) {
        document.getElementById('error-message').textContent = errorMessage;
    } else {
        // Form is valid, proceed with submission (can be AJAX or form action)
        alert('Registration Successful!');
        document.getElementById('registrationForm').reset();
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

function registration() {
    location.replace("file:///C:/Users/Admin/Desktop/index.html")
  }