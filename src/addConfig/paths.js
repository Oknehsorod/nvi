const { join } = require("path");
const { homedir } = require("os");

const getNVIMConfigFolder = () => join(homedir(), '.config/nvim');

module.exports = {
  getNVIMConfigFolder,
};
