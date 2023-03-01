import fetchUser from './profile/gateway.js';
import { promptProfile } from './profile/index.js';

fetchUser('facebook').then((userData) =>
  promptProfile({
    name: userData.name,
    location: userData.location,
    avatar: userData.avatar_url,
  })
);
