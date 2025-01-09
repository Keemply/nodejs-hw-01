import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const result = [];
  result.push(createFakeContact());
  await writeContacts(result);
};

addOneContact();
