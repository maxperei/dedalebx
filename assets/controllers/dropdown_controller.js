import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['btn', 'date'];
  static values = {
    startDate: String,
  }

  reset(e) {
    this._handleMenuActive(e);
    this.dateTarget.innerHTML = this.startDateValue;
    this.dispatch('reset')
  }
  selectDate(e) {
    this._handleMenuActive(e);
    this.dateTarget.innerHTML = e.target.innerHTML;
    const id = e.target.getAttribute('data-id');
    this.dispatch('changed', {detail: {id: id}})
  }
  _handleMenuActive(e) {
    const currentMenuActive = this.element.querySelector('.menu-active');
    if (currentMenuActive) {
      this.element.querySelector('.menu-active').classList.remove('menu-active');
    }
    e.target.classList.add('menu-active');
    document.activeElement.blur();
  }
}
