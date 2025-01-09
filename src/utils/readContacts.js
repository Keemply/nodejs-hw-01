import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const fileContent = await fs.readFile(PATH_DB, 'utf-8');

    return JSON.parse(fileContent);
  } catch (err) {
    console.error(err);
  }
};
