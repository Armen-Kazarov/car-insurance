// "use strict"

//   function burgerMenu() {
//     const iconMenuOpen = document.querySelector('.menu-icon-open');
//     const menuBody = document.querySelector('.menu__body');
//     const menuButtonClose = document.querySelector('.menu__button-close-wrapper');
//     const menuItems = document.querySelectorAll('.header-nav-menu-list-item');
    
//     // Burger menu
//     if (iconMenuOpen) {
//       iconMenuOpen.addEventListener("click", function (e) {
//         document.body.classList.toggle('_lock');
//         iconMenuOpen.classList.toggle('_active');
//         menuBody.classList.toggle('_active');
//       });
//     }
  
//     for (let item of menuItems) {
//       if (item) {
//         item.addEventListener("click", function (e) {
//           document.body.classList.toggle('_lock');
//           iconMenuOpen.classList.toggle('_active');
//           menuBody.classList.toggle('_active');
//         });
//       }
//     }

//     if (menuButtonClose) {
//       menuButtonClose.addEventListener("click", function (e) {
//         document.body.classList.toggle('_lock');
//         menuBody.classList.toggle('_active');
//       })
//     }
//   }
  
//   burgerMenu();