import { timeout } from "../assets/js/libraries/utilities.js";
import { setAuth } from "../assets/js/libraries/cookie.js";

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

    window.location.assign("/dashboard");
  });
}

// Additional Function ---------------------------------------------------------

/**
 * @param  {HTMLFormElement} form
 * @param  {FormData} data
 */
const formValidation = (form, data) => {
  let error = false;

  const username = data.get("username");
  const password = data.get("password");

  if (!username) {
    form.querySelectorAll("[name='username']").forEach((element) => element.setAttribute("error", "This field is required"));
    error = true;
  }

  if (!password) {
    form.querySelectorAll("[name='password']").forEach((element) => element.setAttribute("error", "This field is required"));
    error = true;
  }

  return !error;
};
