import { html, render } from "https://cdn.jsdelivr.net/npm/uhtml@4.5.11/index.min.js";

/**
 * @element ch-pie
 *
 * @attr {string} [class]
 */
class ChartPie extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.renderTemplate();
  }

  renderTemplate() {
    render(this, html``);
  }
}

customElements.define("ch-pie", ChartPie);
