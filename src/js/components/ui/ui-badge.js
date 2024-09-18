import { html, render } from "https://cdn.jsdelivr.net/npm/uhtml@4.5.11/index.min.js";
/**
 * @element ui-badge
 *
 * @attr {string} [class]
 */
class UIBadge extends HTMLElement {
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

customElements.define("ui-badge", UIBadge);
