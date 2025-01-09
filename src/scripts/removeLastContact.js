import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from '../utils/readContacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  const contacts = await readContacts();
  contacts.pop();
  await fs.writeFile(PATH_DB, JSON.stringify(contacts), 'utf-8');
};

removeLastContact();
