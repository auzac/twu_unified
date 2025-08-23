// Function to hide all pages and show the requested one
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');
}

// Handle the form submission for the login page
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Hardcoded credentials for this single-file demo
    if (usernameInput === "teacher" && passwordInput === "password123") {
        errorMessage.classList.add('hidden');
        showPage('teachers-dashboard');
    } else {
        errorMessage.classList.remove('hidden');
    }
});

// Show the homepage on initial load
showPage('homepage');
