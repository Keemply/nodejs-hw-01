import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const result = [];
  for (let i = 0; i < number; i++) {
    result.push(createFakeContact());
  }

  await writeContacts(result);
};

generateContacts(5);
