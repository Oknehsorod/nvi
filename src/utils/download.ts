import { createWriteStream } from 'fs-extra';
import axios from 'axios';

import { getNeoVimLocation } from '../paths';

import { NVIM_IMAGE_URL } from '../constants';

export const downloadNeoVim = async (): Promise<void> => {
  const writer = createWriteStream(getNeoVimLocation());
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
