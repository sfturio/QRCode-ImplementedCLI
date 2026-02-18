import { input } from '@inquirer/prompts';
import QRCode from "qrcode";
import fs from "fs";

// 1. GET USER INPUT
const url = await input({
  message: "Enter any URL"
});

// 2. GENERATE QR CODE IMAGE
  await QRCode.toFile("qrcode.png", url);

// 3. SAVE USER INPUT INTO TXT FILE
fs.writeFileSync("url.txt", url);

//
console.log("Done!");