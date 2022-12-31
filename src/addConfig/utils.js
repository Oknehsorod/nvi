const { mkdirSync, existsSync } = require("fs");
const { copySync, removeSync } = require("fs-extra");
const { join } = require("path");

const { getNVIMConfigFolder } = require("./paths");

const createNVIMConfigFolder = () => {
  if (!existsSync(getNVIMConfigFolder()))
    mkdirSync(getNVIMConfigFolder(), { recursive: true });
};

const copyNVimConfigToConfigFolder = () => {
  createNVIMConfigFolder();

  removeSync(getNVIMConfigFolder());
  copySync(join(__dirname, "../../nvimConfig"), getNVIMConfigFolder());
};

module.exports = {
  copyNVimConfigToConfigFolder,
};
