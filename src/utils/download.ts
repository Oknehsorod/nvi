import { createWriteStream } from 'fs-extra';
import axios from 'axios';

import neoVimPaths from '../paths';

import { NVIM_IMAGE_URL } from '../constants';

export const downloadNeoVim = async (): Promise<void> => {
  const writer = createWriteStream(neoVimPaths.getEditor());
  const response = await axios({
    method: 'get',
    url: NVIM_IMAGE_URL,
    responseType: 'stream',
  });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on('error', (error) => reject(error));
    writer.on('finish', () => resolve());
  });
};
