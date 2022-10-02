import { createContext, useState } from 'react';
import { useTokenStorage } from '../screens/Authentication/util/useTokenStorage';

const defaultAuthState = {
  token: '',
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {},
};

export const AuthContext = createContext(defaultAuthState);

function AuthContextProvider({ children }) {
  const [tokenState, setTokenState] = useState({
    token: '',
    isAuthenticated: false
  });
  const { set, del } = useTokenStorage();

  async function authenticate(token) {
    if (!!token) {
      setTokenState({token: token, isAuthenticated: true});
      await set(token)
    } else {
      setTokenState({token: '', isAuthenticated: false});
      await set(null)
    }
  }

  async function logout() {
    await del();
    setTokenState({token: '', isAuthenticated: false});
  }

  return <AuthContext.Provider value={{...tokenState, authenticate: authenticate, logout: logout}}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;



// 1. get user input
// 2. validate user input
// 3. sign in/up using backend endpoints (TODO)
// 4. if successful, get token from json, and set in the async storage; if failed, remove token if existed.
// 5. automatically, navigate to somewhere