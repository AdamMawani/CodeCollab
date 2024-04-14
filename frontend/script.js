// script.js

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const message = document.getElementById('message');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Make AJAX request to login endpoint
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `username=${username}&password=${password}`
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // If login successful, redirect to dashboard or perform other actions
                window.location.href = '/dashboard';
            } else {
                // If login failed, display error message
                message.textContent = data.message;
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
