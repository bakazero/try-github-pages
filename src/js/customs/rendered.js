import { html, render } from "https://esm.run/uhtml@4.5.11";

const container = document.createElement("div");
document.body.append(container);
const template = html` <div id="rendered" class="sr-only"></div> `;
render(container, template);
