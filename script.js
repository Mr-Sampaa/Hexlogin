const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
// Optional: Check screen size if specific behavior is needed for mobile
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        console.log('Mobile view active');
        // Add any specific mobile behavior here if needed
    }
});
