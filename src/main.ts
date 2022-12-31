#!/usr/bin/env node
import {
  removeAllNeoVimFolders,
  createAllNeoVimFolders,
  copyNVimConfigToConfigFolder,
} from './utils/folders';
import { downloadNeoVim } from './utils/download';
import {
  installNeoVimPlug,
  installNeoVimPlugins,
  installCocPlugins,
  makeNeoVimExecutable,
} from './utils/commands';
import {
  logDeletingAllNeoVimFolders,
  logCreatingAllNeoVimFolders,
  logDownloadingNeoVim,
  logDownloadCompleteNeoVim,
  logInstallNeoVimPlug,
  logInstallNeoVimPlugins,
  logInstallCocPlugins,
} from './utils/logger';

const main = async () => {
  logDeletingAllNeoVimFolders();
  removeAllNeoVimFolders();

  logCreatingAllNeoVimFolders();
  createAllNeoVimFolders();

  logDownloadingNeoVim();
  await downloadNeoVim();
  makeNeoVimExecutable()
  copyNVimConfigToConfigFolder();
  logDownloadCompleteNeoVim();

  logInstallNeoVimPlug();
  installNeoVimPlug();

  logInstallNeoVimPlugins();
  installNeoVimPlugins();

  logInstallCocPlugins();
  installCocPlugins();
};

main();
