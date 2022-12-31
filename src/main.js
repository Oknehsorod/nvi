require("dotenv").config();

const { updateNVim } = require("./downloadNVim");
const { copyNVimConfigToConfigFolder } = require("./addConfig");
const { installNVimPlug, installPlugins } = require('./nvimCommands');

const main = async () => {
  await updateNVim();
  copyNVimConfigToConfigFolder()
  installNVimPlug();
  installPlugins();

};

main();
