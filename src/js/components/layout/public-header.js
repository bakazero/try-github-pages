import { html, render } from "https://cdn.jsdelivr.net/npm/uhtml@4.5.11/+esm";
/**
 * @element public-header
 */
class PublicHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.renderTemplate();
  }

  renderTemplate() {
    render(
      this,
      html`
        <header>
          <h1>Header</h1>
          <nav>
            <ui-link href="">Home</ui-link>
            <ui-link href="about/">About</ui-link>
            <ui-link href="login/">Login</ui-link>
          </nav>
        </header>
      `
    );
  }
}

customElements.define("public-header", PublicHeader);
