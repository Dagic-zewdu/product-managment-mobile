import React from 'react';
import GoogleAuthInit, {getCurrentUser} from './config';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import styles from './style';
import auth from '@react-native-firebase/auth';

const SignInWithGoogle = () => {
  return (
    <GoogleSigninButton
      style={styles.gBtn}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={() =>
        GoogleAuthInit()
          .then(() => console.log('signed in successfull'))
          .catch(err => console.warn(err))
      }
    />
  );
};

export default SignInWithGoogle;
