import { removeSync, existsSync, mkdirSync, copySync } from 'fs-extra';
import { join } from 'path';

import {
  getNeoVimLocationFolder,
  getNeoVimConfigFolder,
  getNeoVimPluginFolder,
} from '../paths';

const createFolder = (path: string) => {
  if (!existsSync(path))
    mkdirSync(path, {
      recursive: true,
    });
};

const createNeoVimFolder = () => createFolder(getNeoVimLocationFolder());
const createNeoVimConfigFolder = () => createFolder(getNeoVimConfigFolder());

const removeNeoVimConfigFolder = () => removeSync(getNeoVimConfigFolder());
const removeNeoVimFolder = () => removeSync(getNeoVimLocationFolder());
const removeNeoVimPluginFolder = () => removeSync(getNeoVimPluginFolder());

const putDefaultNeoVimConfig = () =>
  copySync(join(__dirname, '../../.config'), getNeoVimConfigFolder());

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
