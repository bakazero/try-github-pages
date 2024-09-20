import { html, render } from "https://cdn.jsdelivr.net/npm/uhtml@4.5.11/+esm";
/**
 * @element public-footer
 */
class PublicFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.renderTemplate();
  }

  renderTemplate() {
    render(this, html` <footer>Footer</footer> `);
  }
}

customElements.define("public-footer", PublicFooter);
