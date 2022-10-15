import { useContext, useState } from 'react';
import { Alert } from 'react-native';
import { AuthContext } from '../../../store/auth-context';

import AuthContent from '../components/AuthContent';
import LoadingOverlay from '../components/LoadingOverlay';
import { login } from '../util/auth';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCxt = useContext(AuthContext);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      console.log('calling authenticate next (signin)')
      authCxt.authenticate(token);
    } catch (error) {
      console.log(error)
      Alert.alert(
        'Authentication failed!',
        'Could not log you in. Please check your credentials or try again later!'
      );
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;