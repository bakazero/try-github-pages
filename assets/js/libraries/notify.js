import { Notyf } from "https://esm.run/notyf@3.10.0";

export const toast = new Notyf({
  duration: 3000,
  position: {
    x: "right",
    y: "bottom",
  },
  ripple: false,
});
