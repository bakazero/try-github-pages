import { html, render } from "https://esm.run/uhtml@4.5.11";
/**
 * @element ch-bar
 *
 * @attr {string} [class]
 */
class ChartBar extends HTMLElement {
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

customElements.define("ch-bar", ChartBar);
