import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['stack', 'intro'];

  resetIntro(e) {
    this.introTarget.classList.remove('hidden');
    this.stackTarget.classList.add('hidden');
  }

  revealCard(e) {
    this.introTarget.classList.add('hidden');
    this.stackTarget.classList.remove('hidden');
    const nodeToMove = this.element.querySelector(e.detail.id);
    this.stackTarget.insertBefore(nodeToMove, this.stackTarget.firstElementChild);
  }

  revealDrawer(e) {
    if (e.target.tagName !== 'A' && e.target.tagName !== 'LABEL') {
      return;
    }
    this.element.querySelector('#' + e.currentTarget.querySelector('label').getAttribute('for')).checked = true;
  }
}
