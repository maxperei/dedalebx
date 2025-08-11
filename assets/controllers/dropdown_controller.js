import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['btn', 'date'];
  static values = {
    startDate: String,
  }

  connect() {
    const queryParams = new URLSearchParams(document.location.search);
    if (!queryParams.has('date')) {
      return;
    }
    const btn = this.element.querySelector(`button[data-date="${queryParams.get('date')}"]`);
    btn.dispatchEvent(new CustomEvent('click'));
  }

  reset(e) {
    this._handleMenuActive(e);
    this.dateTarget.innerHTML = this.startDateValue;
    this.dispatch('reset')
    const url = new URL(window.location.href);
    url.searchParams.delete('date');
    history.pushState({},'', url);
  }

  selectDate(e) {
    this._handleMenuActive(e);
    this._pushQueryParams(e.target.dataset);
    this.dateTarget.innerHTML = e.target.innerHTML;
  }

  open() {
    this.btnTarget.focus();
  }

  _pushQueryParams({id, date}) {
    const url = new URL(window.location.href);
    url.searchParams.set('date', date);
    history.pushState({},'', url);
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
