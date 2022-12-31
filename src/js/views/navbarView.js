import View from './View.js';

class NavbarView extends View {
  _parentElement = document.querySelector('.navbar--list');
  _bodyEl = document.querySelector('body');
  _navbarEl = document.querySelector('.navbar');

  toggleNavbar() {
    this._navbarEl.addEventListener('click', this._toggleNavbarFunc.bind(this));
  }

  _toggleNavbarFunc(e) {
    if (!e.target.classList.contains('menu--bar')) return;
    this._bodyEl.classList.toggle('blur--body');
    this._parentElement.classList.toggle('show--navbar');
  }
}

export default new NavbarView();
