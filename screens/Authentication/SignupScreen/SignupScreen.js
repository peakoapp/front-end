import { useState, useContext } from 'react';
import { Alert } from 'react-native';
import { AuthContext } from '../../../store/auth-context';

import AuthContent from '../components/AuthContent';
import LoadingOverlay from '../components/LoadingOverlay';
import { createUser } from '../util/auth';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCxt = useContext(AuthContext);

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      console.log('calling authenticate next (signup)')
      authCxt.authenticate(token);
    } catch (error) {
      Alert.alert(
        'Authentication failed',
        'Could not create user, please check your input and try again later.'
      );
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;