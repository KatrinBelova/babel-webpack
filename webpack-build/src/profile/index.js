import fetchUser from './gateway.js';

export function promptProfile(user) {
  console.log(user.name);
  console.log(user.location);
  console.log(user.avatar);
}

fetchUser('facebook').then((userData) =>
  promptProfile({
    name: userData.name,
    location: userData.location,
    avatar: userData.avatar_url,
  })
);
