import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['maze'];

  connect() {
    document.addEventListener('scroll', this.syncScroll.bind(this));
  }

  syncScroll() {
    const percentage = window.scrollY / (document.documentElement.offsetHeight - window.innerHeight)
    const el = this.mazeTarget.querySelector('header');
    el.scrollTop = percentage * (el.scrollHeight - el.offsetHeight);
  }
}
