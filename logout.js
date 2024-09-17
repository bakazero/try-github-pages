import { removeAuth } from "./assets/js/libraries/cookie.js";

document.querySelector("ui-link[href='/logout']")?.addEventListener("click", async (event) => {
  event.preventDefault();
  console.log("logout");
  await removeAuth();
  window.location.assign("/login");
});
