import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {GOOGLE_CLIENT_ID} from '@env';

GoogleSignin.configure({
  webClientId: GOOGLE_CLIENT_ID,
});

const GoogleAuthInit = async () => {
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices({
    showPlayServicesUpdateDialog: true,
  });
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
};

export default GoogleAuthInit;
