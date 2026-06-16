'use strict';
var theme = {
  /**
   * Theme's components/functions list
   * Comment out or delete the unnecessary component.
   * Some components have dependencies (plugins).
   */
  init: function () {
    theme.topbardropdown();
    
  },

   topbardropdown: function () {
    const dropdowns = document.querySelectorAll('.top-bar-dropdown');

    dropdowns.forEach(function (dropdown) {
      const button = dropdown.querySelector('.dropdown-btn');
      const menu = dropdown.querySelector('.dropdown-menus');

      button.addEventListener('click', function (e) {
        e.stopPropagation();
        menu.classList.toggle('open');
        dropdowns.forEach(function (otherDropdown) {
          if (otherDropdown !== dropdown) {
            otherDropdown.querySelector('.dropdown-menus').classList.remove('open');
          }
        });
      });
    });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.top-bar-dropdown')) {
        dropdowns.forEach(function (dropdown) {
          dropdown.querySelector('.dropdown-menus').classList.remove('open');
        });
      }
    });
  },

};

// Initialize the theme
document.addEventListener('DOMContentLoaded', function () {
  theme.init();
});

(function() {
  "use strict";

  const select = (el) => document.querySelector(el);

  let selectHeader = select('.top-navbar');
  if (selectHeader) {
    let headerOffset = selectHeader.offsetTop;
    let nextElement = selectHeader.nextElementSibling;

    const headerFixed = () => {
      if ((headerOffset - window.scrollY) <= 0) {
        selectHeader.classList.add('fixed-top');
        if (nextElement) nextElement.classList.add('scrolled-offset');
      } else {
        selectHeader.classList.remove('fixed-top');
        if (nextElement) nextElement.classList.remove('scrolled-offset');
      }
    }

    window.addEventListener('load', headerFixed);
    document.addEventListener('scroll', headerFixed);
  }
})();
