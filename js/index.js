const btnSearch = document.querySelector('.header__btn--search');
const btnClose = document.querySelector('.search-form__close');
const searchForm = document.querySelector('.search-form');


btnSearch.addEventListener('click', () => {
  searchForm.classList.add('header-form--display');

  setTimeout(() => {
    searchForm.classList.add('header__btn--visible');
  }, 300);
});

btnClose.addEventListener('click', () => {



  searchForm.classList.remove('header__btn--visible');
  setTimeout(() => {
    searchForm.classList.remove('header-form--display');
    searchForm.reset();
  }, 300);
});



