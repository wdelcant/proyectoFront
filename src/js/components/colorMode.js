// color-scheme: dark or light button

export const colorMode = button => {
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const currentTheme = localStorage.getItem('theme');
  const isDarkMode = currentTheme === 'dark';

  if (currentTheme) {
    document.body.classList.toggle('dark', isDarkMode);
  } else if (prefersDarkScheme.matches) {
    document.body.classList.add('dark');
  }

  button.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem(
      'theme',
      document.body.classList.contains('dark') ? 'dark' : 'light'
    );
  });
};

// Language: javascript
