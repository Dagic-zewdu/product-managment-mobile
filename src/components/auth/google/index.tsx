import React from 'react';
import GoogleAuthInit from './config';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import styles from './style';
const SignInWithGoogle = () => {
  const onButtonPress = async () => {
    const res = await GoogleAuthInit();
    console.log(res);
  };
  return (
    <GoogleSigninButton
      style={styles.gBtn}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={onButtonPress}
    />
  );
};

export default SignInWithGoogle;
