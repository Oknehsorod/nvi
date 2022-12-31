import inquirer from 'inquirer';

import neoVimPaths from '../paths';

const questions = [
  {
    name: 'neoVimEditorPath',
    message: 'Where to locate NeoVim?',
    default: neoVimPaths.getEditor(),
  },
  {
    name: 'neoVimConfigPath',
    message: 'Where to locate NeoVim config?',
    default: neoVimPaths.getConfigFolder(),
  },
  {
    name: 'neoVimAliases',
    type: 'confirm',
    message: 'Create aliases for neovim (v/vconfig)?',
    default: false,
  },
];

interface Configuration {
  neoVimEditorPath: string;
  neoVimConfigPath: string;
  neoVimAliases: boolean;
}

export const askConfigurationQuestions = (): Promise<Configuration> => inquirer.prompt(questions);
