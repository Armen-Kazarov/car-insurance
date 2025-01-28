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
          document.body.classList.remove('_lock');
          iconMenuOpen.classList.toggle('_active');
          menuBody.classList.toggle('_active');
          iconMenuOpen.classList.remove('_visible');
          siteLogo.classList.remove('_visible');
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
  const registrationForms = document.querySelectorAll('.contacts-section-form');

  registrationForms.forEach((registrationForm) => {
    registrationForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const regFormData = new FormData(event.target);
      const data = Object.fromEntries(regFormData.entries());
      console.log(data);
  
      window.location.href = '../temp-pages/tempPage1.html';
    });
  })
  
    const aboutUsSection = document.querySelector(".about-us-section");
    const specialOffersLinks = document.querySelectorAll(".special-offers-section-link");
    const imgVisibilityWrapper = document.querySelector(".about-us-section-img-visibility-wrapper");

    const options = {
      threshold: [0.8, 1.0]
    }
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        
        if (entry.target === aboutUsSection) {

          if (entry.isIntersecting && entry.intersectionRatio >= 0.8) {
            imgVisibilityWrapper.classList.add("_show");
          }
        }

        if (entry.isIntersecting && entry.intersectionRatio === 1) {

          if (entry.target.classList.contains("special-offers-section-link")) {
            const subtitle = entry.target.querySelector(".special-offers-section-link-subtitle");
            const chevron = entry.target.querySelector(".special-offers-section-link-icon-chevron");

            if (subtitle) {
              subtitle.classList.add("_show-subtitle");
            }

            if (chevron) {
              chevron.classList.add("_show-link-chevron");
            } 
          }
        }
      });
    }, options);
  
    observer.observe(aboutUsSection);
    specialOffersLinks.forEach((link) => observer.observe(link));

    const btnNext = document.querySelector(".btn-slider-next");
    const btnPrev = document.querySelector(".btn-slider-prev");
    const sliders = document.querySelectorAll(".our-team-section-list > li");
    const slidersList = document.querySelector(".our-team-section-list");

    let currentSliderIndex = 0;
    const slideWidth = 100;

    const updateSliderPosition = () => {
      slidersList.style.transform = `translateX(-${currentSliderIndex * slideWidth}%)`;
    };
    
    const slideNextSwitchHandler = () => {
      if (currentSliderIndex < sliders.length - 1) {
        currentSliderIndex++;
        updateSliderPosition();
        
      }
    };

    const slidePrevSwitchHandler = () => {
      if (currentSliderIndex > 0) {
        currentSliderIndex--;
        updateSliderPosition();
      }
    };

    btnNext.addEventListener("click", slideNextSwitchHandler);
    btnPrev.addEventListener("click", slidePrevSwitchHandler);
})