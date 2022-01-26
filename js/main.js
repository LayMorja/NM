// const menuBtn = document.querySelector('.m-menu');
// const sidebar = document.querySelector('.header__block__menu');

// menuBtn.addEventListener('click', function () {
//    sidebar.classList.toggle('active')
// })

var mixer = mixitup(".index-menu__row");

document.addEventListener('DOMContentLoaded', () => {
  const onScrollHeader = () => { // объявляем основную функцию onScrollHeader

    const header = document.querySelector('.header') // находим header и записываем в константу

    let prevScroll = window.pageYOffset // узнаем на сколько была прокручена страница ранее
    let currentScroll // на сколько прокручена страница сейчас (пока нет значения)

    window.addEventListener('scroll', () => { // при прокрутке страницы

      currentScroll = window.pageYOffset // узнаем на сколько прокрутили страницу

      const headerHidden = () => header.classList.contains('header_hidden') // узнаем скрыт header или нет

      if (currentScroll > prevScroll && !headerHidden()) { // если прокручиваем страницу вниз и header не скрыт
        header.classList.add('header_hidden') // то скрываем header
      }
      if (currentScroll < prevScroll && headerHidden()) { // если прокручиваем страницу вверх и header скрыт
        header.classList.remove('header_hidden') // то отображаем header
      }

      prevScroll = currentScroll // записываем на сколько прокручена страница на данный момент

    })
  }
  onScrollHeader()
});


const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 400;

if (popupLinks.length > 0) {
   for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener('click', function(e) {
         const popupName = popupLink.getAttribute('href').replace('#', '');
         const curentPopup = document.getElementById(popupName);
         popupOpen(curentPopup);
         e.preventDefault();
      });
   }
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
   for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index];
      el.addEventListener('click', function(e) {
         popupClose(el.closest('.popup'));
         e.preventDefault();
      })
   }
}

function popupOpen(curentPopup) {
   if (curentPopup && unlock) {
      const popupActive = document.querySelector('.popup.open');
      if (popupActive) {
         popupCloseIcon(popupActive, false);
      } else {
         bodyLock();
      }
      curentPopup.classList.add('open');
      curentPopup.addEventListener('click', function(e) {
         if (!e.target.closest('.popup__content')) {
            popupClose(e.target.closest('.popup'));
         }
      });
   }
}
function popupClose(popupActive, doUnlock = true) {
   if(unlock) {
      popupActive.classList.remove('open');
      if(doUnlock) {
         bodyUnlock();
      }
   }
}

function bodyLock() {
   const lockPaddinValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

   if (lockPadding.length > 0) {
      for(let index = 0; index < lockPaddinValue.length; index++) {
         const el = lockPadding[index];
         el.style.paddingRight = lockPaddinValue;
      }
      body.style.paddingRight = lockPaddinValue;
      body.classList.add('lock');
   }

   unlock = false;
   setTimeout(function() {
      unlock = true;
   }, timeout);
}
function bodyUnlock() {
   setTimeout(function() {
      for(let index = 0; index < lockPadding.length; index++) {
         const el = lockPadding[index];
         el.style.paddingRight = '0px';
      }
      body.style.paddingRight = '0px';
      body.classList.remove('lock');
   }, timeout);

   unlock = false;
   setTimeout(function() {
      unlock = true;
   }, timeout);
}

document.addEventListener('keydown', function(e) {
   if(e.which === 27) {
      const popupActive = document.querySelector('.popup.open');
      popupClose(popupActive);
   }
})