import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['btn', 'date'];

  connect() {

  }

  select(e) {
    this.dateTarget.innerHTML = e.target.innerHTML;
    const id = e.target.getAttribute('data-id');
    this.dispatch('changed', {detail: {id: id}})
  }
}
