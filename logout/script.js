import { removeAuth } from "../assets/js/libraries/cookies.js";
import { baseUrl } from "../assets/js/libraries/settings.js";

document.querySelector("ui-link[href='logout']")?.addEventListener("click", async (event) => {
  event.preventDefault();
  await removeAuth();
  window.location.assign(`${baseUrl}login`);
});
