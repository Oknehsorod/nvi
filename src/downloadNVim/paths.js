const { join, dirname } = require("path");
const { homedir } = require("os");

const getNVIMLocation = () => join(homedir(), process.env.NVIM_FOLDER);
const getNVIMLocationFolder = () => dirname(getNVIMLocation());

module.exports = {
  getNVIMLocation,
  getNVIMLocationFolder,
};
