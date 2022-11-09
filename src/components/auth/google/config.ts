import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {GOOGLE_CLIENT_ID} from '@env';

GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  webClientId: GOOGLE_CLIENT_ID,
});

const GoogleAuthInit = async () => {
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices({
    showPlayServicesUpdateDialog: true,
  });
  // Get the users ID token

  const res = await GoogleSignin.signIn();
  console.log(res);
  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(res.idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
};

export const getCurrentUser = async () => {
  const currentUser = await GoogleSignin.getCurrentUser();
  return currentUser;
};
export default GoogleAuthInit;
