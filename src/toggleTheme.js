const refs = {
  body: document.querySelector('body'),
  toggle: document.querySelector('.theme-switch__toggle'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = Theme;

refs.toggle.addEventListener('change', toogleClassList);
refs.toggle.addEventListener('change', toogleLocalStorage);

function classListChange(addClass, removeClass) {
  refs.body.classList.add(addClass);
  refs.body.classList.remove(removeClass);
}

function toogleClassList() {
  const checkToggle = refs.toggle.checked;

  if (checkToggle) {
    classListChange(DARK, LIGHT);
  } else {
    classListChange(LIGHT, DARK);
  }
}

function toogleLocalStorage() {
  const checkToggle = refs.toggle.checked;

  if (checkToggle) {
    localStorage.setItem('theme', DARK);
  } else {
    localStorage.setItem('theme', LIGHT);
  }
}

const themInLocal = localStorage.getItem('theme');

if (themInLocal === Theme.DARK) {
  refs.body.classList.add(DARK);
  refs.toggle.checked = true;
}
