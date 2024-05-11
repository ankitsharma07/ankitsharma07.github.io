document.addEventListener('DOMContentLoaded', function () {
  var themeToggle = document.getElementById('theme-toggle');
  var body = document.body;

  // Check for saved theme preference
  var savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.add(savedTheme);
  }

  // Toggle theme on button click
  themeToggle.addEventListener('click', function () {
    if (body.classList.contains('dark-theme')) {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
      localStorage.setItem('theme', 'light-theme');
    } else {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark-theme');
    }
  });
});
