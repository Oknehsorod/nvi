import { red, blue, cyan, green } from 'chalk';

import {
  getNeoVimLocation,
  getNeoVimLocationFolder,
  getNeoVimConfigFolder,
  getNeoVimPluginFolder,
} from '../paths';

export const logDeletingAllNeoVimFolders = () => {
  console.info('Deleting All NeoVim Folders: ');
  [
    getNeoVimLocationFolder(),
    getNeoVimConfigFolder(),
    getNeoVimPluginFolder(),
  ].forEach((path) => console.info(red(path)));
};

export const logCreatingAllNeoVimFolders = () => {
  console.info('Creating All NeoVim Folders: ');
  [getNeoVimLocationFolder(), getNeoVimConfigFolder()].forEach((path) =>
    console.info(green(path))
  );
};

export const logDownloadingNeoVim = () =>
  console.info('Downloading NeoVim to: ', green(getNeoVimLocation()));

export const logDownloadCompleteNeoVim = () => green('Download Completed!');

export const logInstallNeoVimPlug = () =>
  console.info('Installing NeoVim Plug');
export const logInstallNeoVimPlugins = () =>
  console.info('Installing NeoVim Plugins');
export const logInstallCocPlugins = () =>
  console.info('Installing NeoVim CoC Plugins');
