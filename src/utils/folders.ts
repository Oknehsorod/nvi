import { removeSync, existsSync, mkdirSync, copySync } from 'fs-extra';
import { join } from 'path';

import neoVimPaths from '../paths';

const createFolder = (path: string) => {
  if (!existsSync(path))
    mkdirSync(path, {
      recursive: true,
    });
};

const createNeoVimFolder = () => createFolder(neoVimPaths.getEditorFolder());
const createNeoVimConfigFolder = () => createFolder(neoVimPaths.getConfigFolder());

const removeNeoVimConfigFolder = () => removeSync(neoVimPaths.getConfigFolder());
const removeNeoVimFolder = () => removeSync(neoVimPaths.getEditorFolder());
const removeNeoVimPluginFolder = () => removeSync(neoVimPaths.getPluginFolder());

const putDefaultNeoVimConfig = () =>
  copySync(join(__dirname, '../../.config'), neoVimPaths.getConfigFolder());

export const removeAllNeoVimFolders = () => {
  removeNeoVimFolder();
  removeNeoVimConfigFolder();
  removeNeoVimPluginFolder();
}

export const createAllNeoVimFolders = () => {
  createNeoVimFolder();
  createNeoVimConfigFolder();
}

export const copyNVimConfigToConfigFolder = () => {
  removeNeoVimConfigFolder();
  createNeoVimConfigFolder();
  putDefaultNeoVimConfig();
};
