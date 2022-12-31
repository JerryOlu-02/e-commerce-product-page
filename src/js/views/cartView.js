import View from './View.js';

class CartView extends View {
  _parentEl = document.querySelector('.increase--item--container');
  _addToCartBtn = document.querySelector('.addtocart--btn');
  _errorMessage = 'Your cart is empty.';
  _cartContainer = document.querySelector('.cart--container');

  increaseDecreaseProduct(handler1, handler2, handler3, data) {
    this._parentEl.addEventListener('click', function (e) {
      if (e.target.classList.contains('increase--btn')) {
        handler1();
        handler3();
        document.querySelector('.no--of--products').textContent =
          data.noOfProducts;
      } else if (e.target.classList.contains('decrease--btn')) {
        handler2();
        handler3();
        document.querySelector('.no--of--products').textContent =
          data.noOfProducts;
      } else {
        return;
      }
    });
  }

  showCart() {
    document.querySelector('body').addEventListener('click', function (e) {
      if (!e.target.classList.contains('show--cart')) return;
      document.querySelector('.cart--container').classList.toggle('hide--cart');

      // Show Cart is active on button
      document
        .querySelector('.addtocart--btn')
        .classList.toggle('addtocart--btn--active');
    });

    this._addToCartBtn.addEventListener('click', function (e) {
      document.querySelector('.cart--container').classList.remove('hide--cart');
      e.target.classList.add('addtocart--btn--active');
    });
  }

  deleteProduct(data) {
    document
      .querySelector('.delete--item')
      .addEventListener('click', function () {
        data.noOfProducts = 0;

        // Reset No Of Products
        document.querySelector('.no--of--products').textContent =
          data.noOfProducts;

        // Hide Cart Products and Checkout Button
        document.querySelector('.cart--product').classList.add('hidden');
        document.querySelector('.checkout--btn').classList.add('hidden');
        document
          .querySelector('.cart--container > p:nth-of-type(2)')
          .classList.remove('hidden');
      });
  }
}

export default new CartView();
