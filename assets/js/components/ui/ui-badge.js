import { html, render } from "https://esm.run/uhtml@4.5.11";
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
