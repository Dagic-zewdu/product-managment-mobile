import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './home';
import AuthScreens from './auth';

const Stack = createNativeStackNavigator();

function StackNavigatorComponent() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={AuthScreens} />
    </Stack.Navigator>
  );
}

export default StackNavigatorComponent;
