import { html, render } from "https://esm.run/uhtml@4.5.11";

/**
 * @element ui-card
 *
 * @attr {string} [class]
 */
class UICard extends HTMLElement {
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

customElements.define("ui-card", UICard);
