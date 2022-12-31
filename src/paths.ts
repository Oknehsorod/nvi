import { join, dirname } from 'path';
import { homedir } from 'os';

import { NVIM_FOLDER } from './constants';

interface NeoVimPaths {
  getEditor: () => string;
  getEditorFolder: () => string;
  getConfigFolder: () => string;
  getPluginFolder: () => string;
}

class NeoVimPathsImpl implements NeoVimPaths {
  private editor = join(homedir(), NVIM_FOLDER);
  private editorFolder = dirname(this.editor);
  private configFolder = join(homedir(), '.config/nvim');
  private pluginFolder = join(homedir(), '.local/share/nvim');

  public getEditor() {
    return this.editor;
  }

  public getEditorFolder() {
    return this.editorFolder;
  }

  public getConfigFolder() {
    return this.configFolder;
  }

  public getPluginFolder() {
    return this.pluginFolder;
  }

  public setEditor(editorPath: string) {
    this.editor = editorPath;
    this.editorFolder = dirname(editorPath);
  }

  public setConfigFolder(configPath: string) {
    this.configFolder = configPath;
  }
}

export default new NeoVimPathsImpl();
