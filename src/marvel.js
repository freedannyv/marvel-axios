import CryptoJS from "crypto-js";

export const secret_key = "44e19373b4578ef0cb0729ab0b1f195f13d2ce56";
export const public_key = "b65f3f05176e811ad685edbda3c03305";
export const hash = hashNum(stamp, secret_key, public_key);
export const time_stamp = stamp;

const stamp = timeStamp();

function timeStamp() {
  return Date.now();
}

function hashNum(stamp, sec, pub) {
  return String(CryptoJS.MD5(stamp + sec + pub));
}
