const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUserName = state => {
  console.log('state', state.auth.user.name);
  return state.auth.user.name;
};

const getToken = state => state.auth.token;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getToken,
};

export default authSelectors;
