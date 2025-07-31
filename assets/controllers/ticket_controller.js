import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['pass', 'unit'];

  revealList(e) {
    this.element.querySelectorAll('[role="tab"].tab-active').forEach((el) => el.classList.remove('tab-active'));
    e.target.classList.add('tab-active');
    this.element.querySelectorAll('[role="list"]:not(.hidden)').forEach((el) => el.classList.add('hidden'))
    this[`${e.target.getAttribute('id')}Target`].classList.remove('hidden');
  }
}
