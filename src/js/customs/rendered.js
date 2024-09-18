import { html, render } from "https://esm.run/uhtml@4.5.11";

const container = document.createElement("div");
const template = html` <div id="rendered" class="sr-only"></div> `;
render(container, template);
