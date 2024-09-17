import { setCookieWithExpireDay, getCookie, deleteCookie } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.0.3/cookie.js";

export const setAuth = async (token) => {
  await setCookieWithExpireDay("token", token, 1);
};

export const getAuth = () => {
  return getCookie("token");
};

export const removeAuth = () => {
  deleteCookie("token");
};
