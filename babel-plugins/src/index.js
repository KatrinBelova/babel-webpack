import { printProfile } from './profile';

const userData = {
  name: 'Tom',
  age: 17,
};

const profile = {
  ...userData,
  company: 'Onion',
};

printProfile(profile);
