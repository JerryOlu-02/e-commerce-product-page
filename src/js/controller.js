import * as model from './model.js';

import navbarView from './views/navbarView.js';
import carouselView from './views/carouselView.js';
import modalView from './views/modalView.js';
import cartView from './views/cartView.js';
import cartView2 from './views/cartView2.js';

navbarView.toggleNavbar();

carouselView.moveCarouselDesktop();
carouselView.moveCarouselPhone();

modalView.moveCarouselOnImageClick();
modalView.moveCarouselOnBtnClick();
modalView.showModal();
modalView.closemodal();

cartView.increaseDecreaseProduct(
  model.increaseProducts,
  model.decreaseProducts,
  model.calcTotalPrice,
  model.state
);
cartView.showCart();
cartView.deleteProduct(model.state);
cartView2.renderData(model.state);
