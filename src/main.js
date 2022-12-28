require("dotenv").config();

const { updateNVim } = require("./downloadNVim");

const main = async () => {
  await updateNVim();
  
};

main();
