// Toggle the sidebar menu on small screens
const menuToggleBtn = document.getElementById('menu-toggle-btn');
const sidebar = document.querySelector('aside');
const closeBtn = document.getElementById('close-btn');

// Toggle menu on clicking the menu icon
menuToggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

// Close sidebar when clicking the close icon
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('open');
});
