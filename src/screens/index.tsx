import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthScreens from './auth';
import AuthContainer from '../components/auth';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function StackNavigatorComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={AuthContainer} />
        <Stack.Screen name="About" component={AuthScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigatorComponent;
