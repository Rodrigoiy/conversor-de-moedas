const fs = require("fs");
require("dotenv").config();

const env = {
  API_KEY: process.env.API_KEY
};

const content = `window.env = ${JSON.stringify(env)};`;

fs.writeFileSync("env.js", content);
console.log("env.js gerado com sucesso.");