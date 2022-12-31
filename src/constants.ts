export const NVIM_FOLDER = 'nvim/nvim.appimage';
export const NVIM_IMAGE_URL =
  'https://github.com/neovim/neovim/releases/download/stable/nvim.appimage';
export const NVIM_PLUG_SCRIPT =
  'sh -c \'curl -fLo "${XDG_DATA_HOME:-$HOME/.local/share}"/nvim/site/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim\'';

export const COC_PLUGINS = ['coc-tsserver', 'coc-json'];
