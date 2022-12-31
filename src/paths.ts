import { join, dirname } from 'path';
import { homedir } from 'os';

import { NVIM_FOLDER } from "./constants";

export const getNeoVimLocation = () => join(homedir(), NVIM_FOLDER);
export const getNeoVimLocationFolder = () => dirname(getNeoVimLocation());
export const getNeoVimConfigFolder = () => join(homedir(), '.config/nvim');
export const getNeoVimPluginFolder = () => join(homedir(), '.local/share/nvim');
