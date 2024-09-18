import { getAuth } from "./libraries/cookies.js";
import { baseUrl } from "./libraries/settings.js";

const auth = await getAuth();
if (auth) window.location.replace(`${baseUrl}dashboard`);
