const refs = {
  body: document.querySelector('body'),
  toggle: document.querySelector('.theme-switch__toggle'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.toggle.addEventListener('change', toogleClassList);
refs.toggle.addEventListener('change', toogleLocalStorage);

function toogleClassList() {
  const checkToggle = refs.toggle.checked;

  if (checkToggle) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
  }
}

function toogleLocalStorage() {
  const checkToggle = refs.toggle.checked;

  if (checkToggle) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

const themInLocal = localStorage.getItem('theme');

if (themInLocal === Theme.DARK) {
  refs.body.classList.add(Theme.DARK);
  refs.toggle.checked = true;
}
