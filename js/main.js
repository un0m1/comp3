'use strict'

{
  //menu
  const open = document.querySelector('.hamburger');
  const menu = document.querySelector('.overlay');
  const close = document.querySelector('.close-menu');
  const openfilter  = document.querySelector('.open-filter');

  open.addEventListener('click', () => {
    menu.classList.add('show');
    openfilter.classList.add('show');
  });
  
  close.addEventListener('click', () => {
    menu.classList.remove('show');
    openfilter.classList.remove('show');
  });
  
  openfilter.addEventListener('click', () => {
    menu.classList.remove('show');
    openfilter.classList.remove('show');
  });

  // header
  function callback(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  const header = document.querySelector('header');
  const observer = new IntersectionObserver(callback);
  observer.observe(document.getElementById('target'));
}