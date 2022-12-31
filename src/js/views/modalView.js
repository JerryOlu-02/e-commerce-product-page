import View from './View.js';
import carouselView from './carouselView.js';

class ModalView extends View {
  _parentEl = document.querySelector('.modal--slider');
  _slidesEl = document.querySelectorAll('.modal--slide');
  _sliderThumbnail = document.querySelector('.modal--slider--thumbnail');
  _sliderThumbnailImg = document.querySelectorAll(
    '.modal--slider--thumbnail > img'
  );
  _closeModalBtn = document.querySelector('.close--modal--btn');

  curSlide = 0;

  constructor() {
    super();
    this._goToSlide(0);
    this._sliderThumbnailImg[0].classList.add('active--slide');
  }

  moveCarouselOnImageClick() {
    this._sliderThumbnail.addEventListener(
      'click',
      this._moveCarouselFunc.bind(this)
    );

    // document
    //   .querySelector('body')
    //   .addEventListener('keydown', this._keydownMove.bind(this));
  }

  moveCarouselOnBtnClick() {
    document
      .querySelector('.modal--next--btn')
      .addEventListener('click', this._nextSlide.bind(this));
    document
      .querySelector('.modal--prev--btn')
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
    if (!e.target.classList.contains('modal--slider--thumbnail--img')) return;
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
      // slide.style.transform = `translateX(${100 * (i - curSlide)}%)`;
      slide.style.opacity = 0;
      this._slidesEl[curSlide].style.opacity = 1;
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

  showModal() {
    document.querySelector('.slider').addEventListener('click', function (e) {
      if (!e.target.classList.contains('slide')) return;
      document.querySelector('.modal').classList.remove('hide--modal');
    });
  }

  closemodal() {
    this._closeModalBtn.addEventListener(
      'click',
      this._closeModalFunc.bind(this)
    );

    document.querySelector('.modal').addEventListener('click', function (e) {
      if (e.target.classList.contains('modal')) {
        document.querySelector('.modal').classList.add('hide--modal');
      }
    });
  }

  _closeModalFunc(e) {
    document.querySelector('.modal').classList.add('hide--modal');
  }
}

export default new ModalView();
