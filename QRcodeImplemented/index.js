import { input } from '@inquirer/prompts';
import QRCode from "qrcode";
import fs from "fs";

function isValidURL(text) {
  return text.startsWith("http://") || text.startsWith("https://");
}

if (!fs.existsSync("output")) {
  fs.mkdirSync("output");
}

// 1. GET USER INPUT
const url = await input({
  message: "Enter any URL"
});

// VALIDATE URL
if (!isValidURL(url)) {
  console.log("Invalid URL. Please include http:// or https://");
  process.exit(1);
}

// DYNAMIC FILE NAME
const fileName = `qr-${Date.now()}.png`;
const filePath = `output/${fileName}`;

// 2. GENERATE QR CODE IMAGE
await QRCode.toFile(filePath, url);

// 3. SAVE USER INPUT
fs.writeFileSync("url.txt", url);

// save history of all URLs
fs.appendFileSync("history.txt", url + "\n");

//
console.log("Done!");
console.log("QR saved to:", filePath);