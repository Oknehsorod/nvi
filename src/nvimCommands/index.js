const { execSync } = require("child_process");

const { getNVIMLocation } = require('../downloadNVim/paths');

const installNVimPlug = () => {
  console.info("NVim Plug install...");
  execSync(
    "sh -c 'curl -fLo \"${XDG_DATA_HOME:-$HOME/.local/share}\"/nvim/site/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'"
  );
};

const installPlugins = () => {
  execSync(`chmod +x ${getNVIMLocation()}`)
  execSync(`${getNVIMLocation()} +PlugInstall +qall`);
  execSync(`${getNVIMLocation()} +CocInstall coc-tsserver coc-json +qall`)
};

module.exports = {
  installNVimPlug,
  installPlugins,
};
