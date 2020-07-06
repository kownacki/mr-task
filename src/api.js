export const getHouses = async () => {
  const response = await fetch(`http://mr-test-backend.sadek.usermd.net/houses`);
  return response.status === 200 ? (await response.json()).houses : false;
};
