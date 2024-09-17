import { getAuth } from "../assets/js/libraries/cookie.js";

const auth = await getAuth();
if (auth) window.location.replace("/dasboard/");
