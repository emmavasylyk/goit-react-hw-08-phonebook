export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUserName = state => {
  // console.log('state', state.auth.user.name);
  return state.auth.user.name;
};
const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

export const getToken = state => {
  console.log(state);
  return state.auth.token;
};
// console.log('getToken', getToken);

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getToken,
  getIsFetchingCurrent,
};

export default authSelectors;
