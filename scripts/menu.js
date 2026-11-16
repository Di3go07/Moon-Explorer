/**
  menu.js — Menu lateral mobile
 Abre/fecha o side-menu, controla overlay, aria e scroll do body.
*/

(function () {
  'use strict';

  const hamburger = document.getElementById('hamburger');
  const sideMenu  = document.getElementById('side-menu');
  const overlay   = document.getElementById('menu-overlay');
  const closeBtn  = document.getElementById('close-menu');

  // Se a página não tiver o menu, não faz nada
  if (!hamburger || !sideMenu || !overlay || !closeBtn) return;

  const autoCloseTargets = document.querySelectorAll(
    '.side-menu-links a, .side-menu-cta'
  );

  function openMenu() {
    sideMenu.classList.add('active');
    overlay.classList.add('active');
    sideMenu.inert = false;
    hamburger.setAttribute('aria-expanded', 'true');
    sideMenu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeMenu() {
    sideMenu.classList.remove('active');
    overlay.classList.remove('active');
    sideMenu.inert = true;
    hamburger.setAttribute('aria-expanded', 'false');
    sideMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    hamburger.focus();
  }

  // Eventos de abertura
  hamburger.addEventListener('click', openMenu);

  // Eventos de fechamento
  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  autoCloseTargets.forEach((el) => {
    el.addEventListener('click', closeMenu);
  });

  // Fechar com Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sideMenu.classList.contains('active')) {
      closeMenu();
    }
  });
})();