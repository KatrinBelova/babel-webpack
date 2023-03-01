async function fetchUserHovercard(username) {
  const response = await fetch(
    `https://api.github.com/users/${username}/hovercard`
  );
  if (!response.ok) {
    throw new Error('Failed to get user data');
  }
  return await response.json();
}

fetchUserHovercard('facebook').then((userData) =>
  console.log(userData.contexts)
);
