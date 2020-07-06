export const getHouses = async () => {
  const response = await fetch(`http://mr-test-backend.sadek.usermd.net/houses`);
  console.log(response)
  return response.status === 200 ? (await response.json()).houses : false;
};
//
// export const getRepos = async (username) => {
//   const response = await fetch(`https://api.github.com/users/${username}/repos`);
//   return response.status === 200 ? await response.json() : false;
// };
