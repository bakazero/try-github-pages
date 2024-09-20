import { html, render } from "https://cdn.jsdelivr.net/npm/uhtml@4.5.11/+esm";
/**
 * @element ui-badge
 *
 * @attr {string} [className]
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
