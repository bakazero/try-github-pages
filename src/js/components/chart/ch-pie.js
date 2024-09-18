import { html, render } from "https://esm.run/uhtml@4.5.11";

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
