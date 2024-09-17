import { getAuth } from "../assets/js/libraries/cookies.js";
import { baseUrl } from "../assets/js/libraries/settings.js";

const auth = await getAuth();
if (!auth) window.location.replace(`${baseUrl}login`);
