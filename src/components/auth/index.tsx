import React from 'react';
import {View} from 'react-native';
import styles from './style';
import SignInWithGoogle from './google';
const AuthContainer = () => {
  return (
    <View style={styles.container}>
      <SignInWithGoogle />
    </View>
  );
};

export default AuthContainer;
