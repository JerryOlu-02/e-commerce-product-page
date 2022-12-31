import View from './View.js';

class CarouselView extends View {
  _parentEl = document.querySelector('.slider');
  _slidesEl = document.querySelectorAll('.slide');
  _sliderThumbnail = document.querySelector('.slider--thumbnail');
  _sliderThumbnailImg = document.querySelectorAll('.slider--thumbnail > img');

  curSlide = 0;

  constructor() {
    super();
    this._goToSlide(0);
    this._sliderThumbnailImg[0].classList.add('active--slide');
  }

  moveCarouselDesktop() {
    this._sliderThumbnail.addEventListener(
      'click',
      this._moveCarouselFunc.bind(this)
    );

    document
      .querySelector('body')
      .addEventListener('keydown', this._keydownMove.bind(this));
  }

  moveCarouselPhone() {
    document
      .querySelector('.next--btn')
      .addEventListener('click', this._nextSlide.bind(this));
    document
      .querySelector('.prev--btn')
      .addEventListener('click', this._prevSlide.bind(this));
  }

  _keydownMove(e) {
    if (e.key === 'ArrowRight') {
      this._nextSlide();
    } else if (e.key === 'ArrowLeft') {
      this._prevSlide();
    } else return;
  }

  _moveCarouselFunc(e) {
    if (!e.target.classList.contains('slider--thumbnail--img')) return;
    // Get Current Slide Data Attribute
    let curSlideEl = +e.target.dataset.thumbnail;
    this.curSlide = curSlideEl - 1;

    this._addRemoveActiveSlide(e.target);

    // Move to Slide which is clicked
    this._goToSlide(curSlideEl - 1);
  }

  _addRemoveActiveSlide(element) {
    // Remove Active Blur on Image Thumbnail
    this._sliderThumbnailImg.forEach((slide) =>
      slide.classList.remove('active--slide')
    );
    // Add Active Blur on Image Thumbnail
    element.classList.add('active--slide');
  }

  _goToSlide(curSlide) {
    this._slidesEl.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * (i - curSlide)}%)`;
    });

    this._addRemoveActiveSlide(this._sliderThumbnailImg[curSlide]);
  }

  _nextSlide() {
    if (this.curSlide === this._slidesEl.length - 1) {
      this.curSlide = 0;
    } else {
      this.curSlide++;
    }
    this._goToSlide(this.curSlide);
  }

  _prevSlide() {
    if (this.curSlide === 0) {
      this.curSlide = this._slidesEl.length - 1;
    } else {
      this.curSlide--;
    }
    this._goToSlide(this.curSlide);
  }
}

export default new CarouselView();
