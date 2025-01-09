import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const result = await readContacts();
  return result.length;
};

console.log(await countContacts());
