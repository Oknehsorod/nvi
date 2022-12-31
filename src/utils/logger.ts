import { red, green } from 'chalk';

import neoVimPaths from '../paths';

export const logDeletingAllNeoVimFolders = () => {
  console.info('Deleting All NeoVim Folders: ');
  [
    neoVimPaths.getEditorFolder(),
    neoVimPaths.getConfigFolder(),
    neoVimPaths.getPluginFolder(),
  ].forEach((path) => console.info(red(path)));
};

export const logCreatingAllNeoVimFolders = () => {
  console.info('Creating All NeoVim Folders: ');
  [neoVimPaths.getEditorFolder(), neoVimPaths.getPluginFolder()].forEach((path) =>
    console.info(green(path))
  );
};

export const logDownloadingNeoVim = () =>
  console.info('Downloading NeoVim to: ', green(neoVimPaths.getEditor()));

export const logDownloadCompleteNeoVim = () => green('Download Completed!');

export const logInstallNeoVimPlug = () =>
  console.info('Installing NeoVim Plug');
export const logInstallNeoVimPlugins = () =>
  console.info('Installing NeoVim Plugins');
export const logInstallCocPlugins = () =>
  console.info('Installing NeoVim CoC Plugins');
export const logAddingAliases = () => 
  console.info('Adding NeoVim aliases into your shell rc file');
