export const getProfiles = () => {
  return fetch('https://randomuser.me/api?results=12').then(data => data.json())
};
