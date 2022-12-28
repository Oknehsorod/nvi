const axios = require("axios");

const { red } = require("chalk");

const { createWriteStream, mkdirSync, existsSync } = require("fs");
const { getNVIMLocationFolder, getNVIMLocation } = require("./paths");

const createNVimFolder = () => {
  if (!existsSync(getNVIMLocationFolder()))
    mkdirSync(getNVIMLocationFolder(), {
      recursive: true,
    });
};

const downloadNVim = async () => {
  const writer = createWriteStream(getNVIMLocation());
  const response = await axios({
    method: "get",
    url: process.env.NVIM_IMAGE_URL,
    responseType: "stream",
  });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on("error", (error) => reject(error));
    writer.on("finish", () => resolve());
  });
};

const updateNVim = async () => {
  console.info(`Creating nvim directory: `, red(getNVIMLocationFolder()));
  createNVimFolder();
  console.info(`Downloading nvim...`);
  await downloadNVim();
  console.info(`NeoVim path: `, red(getNVIMLocation()));
};

module.exports = {
  updateNVim,
};
