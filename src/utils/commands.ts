import { existsSync } from 'fs-extra';
import { homedir } from 'os';
import { join } from 'path';
import { execSync } from 'child_process';

import neoVimPaths from '../paths';
import { COC_PLUGINS, NVIM_PLUG_SCRIPT } from '../constants';

const runNeoVimCommand = (commands: string[]) =>
  execSync(
    `${neoVimPaths.getEditor()} ${commands
      .map((command) => `+${command}`)
      .join(' ')} +qall`
  );

const runShellCommand = (commands: string[]) =>
  commands.forEach((command) => execSync(command, { stdio: 'pipe' }));

export const makeNeoVimExecutable = () =>
  runShellCommand([`chmod +x ${neoVimPaths.getEditor()}`]);

export const installNeoVimPlug = () => runShellCommand([NVIM_PLUG_SCRIPT]);
export const installNeoVimPlugins = () => runNeoVimCommand(['PlugInstall']);

export const installCocPlugins = () =>
  runNeoVimCommand([`CocInstall ${COC_PLUGINS.join(' ')}`]);

export const addAliases = () => {
  const homeBashrc = join(homedir(), '.bashrc');
  if (!existsSync(homeBashrc)) return;
  runShellCommand([
    `echo "alias v='${neoVimPaths.getEditor()}'" >> ${homeBashrc}`,
    `echo "alias vconfig='v ${neoVimPaths.getConfigFolder()}'" >> ${homeBashrc}`,
  ]);
};
