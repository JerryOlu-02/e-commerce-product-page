import View from './View.js';

class CartViewTwo extends View {
  _parentEl = document.querySelector('.increase--item--container');
  _cartContainer = document.querySelector('.cart--container');

  renderData(data) {
    this._checkData(data);

    this._parentEl.addEventListener('click', function (e) {
      if (
        e.target.classList.contains('increase--btn') ||
        e.target.classList.contains('decrease--btn')
      ) {
        // CHECK IF NO IF THERE IS ANY ACTIVE PRODUCT
        if (data.noOfProducts === 0) {
          document.querySelector('.cart--product').classList.add('hidden');
          document.querySelector('.checkout--btn').classList.add('hidden');
          document
            .querySelector('.cart--container > p:nth-of-type(2)')
            .classList.remove('hidden');
        } else {
          document.querySelector('.cart--product').classList.remove('hidden');
          document.querySelector('.checkout--btn').classList.remove('hidden');
          document
            .querySelector('.cart--container > p:nth-of-type(2)')
            .classList.add('hidden');
        }

        // 1. Update No Of Products in Cart Container
        document.querySelector('.products--number').textContent =
          data.noOfProducts;
        // 2.Update Total Price in Cart Container
        document.querySelector(
          '.total--price'
        ).textContent = `$${data.totalPrice}.00`;
      } else {
        return;
      }
    });
  }

  _checkData(data) {
    if (data.noOfProducts === 0) {
      document.querySelector('.cart--product').classList.add('hidden');
      document.querySelector('.checkout--btn').classList.add('hidden');
      document
        .querySelector('.cart--container > p:nth-of-type(2)')
        .classList.remove('hidden');
    } else {
      document.querySelector('.cart--product').classList.remove('hidden');
      document.querySelector('.checkout--btn').classList.remove('hidden');
      document
        .querySelector('.cart--container > p:nth-of-type(2)')
        .classList.add('hidden');
    }
  }
}

export default new CartViewTwo();
