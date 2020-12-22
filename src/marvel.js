import CryptoJS from "crypto-js";

export const secret_key = "44e19373b4578ef0cb0729ab0b1f195f13d2ce56";
export const public_key = "b65f3f05176e811ad685edbda3c03305";
export let time_stamp = "";
export const hash = hashNum(secret_key, public_key);

function timeStamp() {
  return Date.now();
}

function hashNum(sec, pub) {
  const time = timeStamp();
  time_stamp = time;
  return String(CryptoJS.MD5(time + sec + pub));
}
