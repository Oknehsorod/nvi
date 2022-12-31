#!/usr/bin/env node
import ora from 'ora';

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
  addAliases,
} from './utils/commands';
import {
  logDeletingAllNeoVimFolders,
  logCreatingAllNeoVimFolders,
  logDownloadingNeoVim,
  logDownloadCompleteNeoVim,
  logInstallNeoVimPlug,
  logInstallNeoVimPlugins,
  logInstallCocPlugins,
  logAddingAliases,
} from './utils/logger';
import neoVimPaths from './paths';

import { askConfigurationQuestions } from './utils/prompt';

const main = async () => {
  const configuration = await askConfigurationQuestions();
  neoVimPaths.setEditor(configuration.neoVimEditorPath);
  neoVimPaths.setConfigFolder(configuration.neoVimConfigPath);

  logDeletingAllNeoVimFolders();
  removeAllNeoVimFolders();

  logCreatingAllNeoVimFolders();
  createAllNeoVimFolders();

  logDownloadingNeoVim();
  await downloadNeoVim();
  makeNeoVimExecutable();
  copyNVimConfigToConfigFolder();
  logDownloadCompleteNeoVim();

  logInstallNeoVimPlug();
  installNeoVimPlug();

  logInstallNeoVimPlugins();
  installNeoVimPlugins();

  logInstallCocPlugins();
  installCocPlugins();

  if (configuration.neoVimAliases) {
    logAddingAliases();
    addAliases();
  }
};

main();
