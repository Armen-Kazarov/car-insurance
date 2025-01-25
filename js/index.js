"use strict"
document.addEventListener("DOMContentLoaded", () => {
  function burgerMenu() {
    const siteLogo = document.querySelector('.site-logo');
    const iconMenuOpen = document.querySelector('.menu-icon-open');
    const menuBody = document.querySelector('.menu-body');
    const menuButtonClose = document.querySelector('.menu-button-close-wrapper');
    const menuItems = document.querySelectorAll('.header-nav-menu-list-item');
    
    // Burger menu
    if (iconMenuOpen) {
      iconMenuOpen.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenuOpen.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        iconMenuOpen.classList.toggle('_visible');
        siteLogo.classList.toggle('_visible');
      });
    }
  
    for (let item of menuItems) {
      if (item) {
        item.addEventListener("click", function (e) {
          document.body.classList.toggle('_lock');
          iconMenuOpen.classList.toggle('_active');
          menuBody.classList.toggle('_active');
        });
      }
    }

    if (menuButtonClose) {
      menuButtonClose.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        menuBody.classList.toggle('_active');
        iconMenuOpen.classList.toggle('_visible');
        siteLogo.classList.toggle('_visible');
      })
    }
  }
  
  burgerMenu();

  //popup
  const popupForm = {
    modal: document.querySelector('.js-lightbox'),
    lightboxForm: document.querySelector('.popup-form'),
    btnOpenModal: document.querySelector('.request-call-btn'),
    btn: document.querySelector('.popup-button')
  };

  const showModal = (event) => {
    event.preventDefault();
    const { target } = event;
    popupForm.modal.classList.add('is-open');
  };

  const hideModal = (event) => {
    const { target } = event;

    if(target.nodeName === 'IMG' || target.nodeName === 'DIV') {
      popupForm.modal.classList.remove('is-open');
    }
  };

  const hideModalWithEsc = (event) => {

    if(event.code === 'Escape') {
      popupForm.modal.classList.remove('is-open');
    }
  };

  popupForm.btnOpenModal.addEventListener('click', showModal);
  popupForm.modal.addEventListener('click', hideModal);
  document.addEventListener('keydown', hideModalWithEsc);

  //form submit
  const registrationForm = document.querySelector('.contacts-section-form');
  
  registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const regFormData = new FormData(event.target);
    const data = Object.fromEntries(regFormData.entries());
    console.log(data);

    window.location.href = '../temp-pages/tempPage1.html';
  });
})