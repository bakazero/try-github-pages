import { clsx } from "https://esm.run/clsx@2.1.1";
import { twMerge } from "https://esm.run/tailwind-merge@2.5.2";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
