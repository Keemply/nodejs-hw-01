import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { readContacts } from './readContacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    let newedContacts = await readContacts();
    newedContacts = [...newedContacts, ...updatedContacts];

    await fs.writeFile(PATH_DB, JSON.stringify(newedContacts), 'utf-8');
  } catch (err) {
    console.error(err);
  }
};
