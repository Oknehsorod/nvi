import { execSync } from 'child_process';

import { getNeoVimLocation } from '../paths';
import { COC_PLUGINS, NVIM_PLUG_SCRIPT } from '../constants';

const runNeoVimCommand = (commands: string[]) =>
  execSync(
    `${getNeoVimLocation()} ${commands
      .map((command) => `+${command}`)
      .join(' ')} +qall`
  );

const runShellCommand = (commands: string[]) =>
  commands.forEach((command) => execSync(command, { stdio: 'pipe' }));

export const makeNeoVimExecutable = () =>
  runShellCommand([`chmod +x ${getNeoVimLocation()}`]);

export const installNeoVimPlug = () => runShellCommand([NVIM_PLUG_SCRIPT]);
export const installNeoVimPlugins = () => runNeoVimCommand(['PlugInstall']);

export const installCocPlugins = () =>
  runNeoVimCommand([`CocInstall ${COC_PLUGINS.join(' ')}`]);



