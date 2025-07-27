import {Controller} from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['area'];
  static values = {
    img: String,
  }

  toggleBtns(e) {
    this.element.querySelectorAll('.btn-player').forEach((el) => el.classList.toggle('hidden'));
  }

  revealPlayer(e) {
    if (e.target.classList.contains('btn-active')) {
      e.target.classList.remove('btn-active');
      this.areaTarget.innerHTML = JSON.parse(this.imgValue);
      return;
    }
    this.element.querySelectorAll('.btn-player').forEach((el) => el.classList.remove('btn-active'));
    e.target.classList.add('btn-active');
    this.areaTarget.innerHTML = e.target.getAttribute('data-embed');
  }
}
