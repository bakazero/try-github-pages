import { timeout } from "../src/js/libraries/utilities.js";
import { setAuth } from "../src/js/libraries/cookies.js";
import { baseUrl } from "../src/js/libraries/settings.js";
import { formValidation } from "./validation.js";

const form = document.getElementById("login-form");
if (form instanceof HTMLFormElement) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    if (!formValidation(form, formData)) return;

    form.querySelectorAll("ui-button").forEach((element) => element.setAttribute("disabled", ""));

    await timeout(300);
    const token = "mhwahahahaha";
    await setAuth(token);

    window.location.assign(`${baseUrl}dashboard`);
  });
}
