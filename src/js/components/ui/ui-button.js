import { cn } from "../../libraries/tailwind.js";
import { html, render } from "https://esm.run/uhtml@4.5.11";

/**
 * @element ui-button
 *
 * @attr {"button" | "submit"} [type]
 * @attr {boolean} [disabled]
 * @attr {string} [class]
 */
class UIButton extends HTMLElement {
  constructor() {
    super();
    this.component = null;
    this.content = Array.from(this.childNodes);
  }

  connectedCallback() {
    this.renderTemplate();
  }

  static get observedAttributes() {
    return ["disabled", "type", "class"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (!this.component || oldValue === newValue) return;
    this.renderTemplate();
  }

  renderTemplate() {
    render(
      this,
      html`
        <button
          ?disabled=${this.hasAttribute("disabled")}
          type=${this.getAttribute("type") || "button"}
          class=${cn(
            "text-white bg-blue-700 hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none",
            "disabled:cursor-not-allowed disabled:bg-blue-400 disabled:hover:bg-blue-400",
            this.getAttribute("class")
          )}
        >
          ${this.content}
        </button>
      `
    );

    this.component = this.querySelector("button");
  }
}

customElements.define("ui-button", UIButton);
