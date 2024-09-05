document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const messageElement = document.getElementById('message');
    
    if (password !== confirmPassword) {
        messageElement.textContent = 'Passwords do not match.';
        return;
    }

    messageElement.textContent = 'Registration successful!';
   
    this.reset();
});
