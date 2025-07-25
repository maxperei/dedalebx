import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['stack'];
  showSelectedDate(e) {
    const nodeToMove = this.element.querySelector(e.detail.id);
    this.stackTarget.insertBefore(nodeToMove, this.stackTarget.firstElementChild);
  }
}
