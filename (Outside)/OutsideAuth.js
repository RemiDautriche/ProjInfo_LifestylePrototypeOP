import * as React from 'react';
import { Text, View } from 'react-native';

import Login from './Login';
import SignUp from './SignUp';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const OutsideAuth = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component = {Login} options={{headerShown:false, gestureEnabled: false, animationTypeForReplace: 'pop', animation: 'none'}}/>
        <Stack.Screen name='SignUp' component = {SignUp} options={{headerShown:false, gestureEnabled: false, animationTypeForReplace: 'push', animation:'fade_from_bottom'}}/>

    </Stack.Navigator>
  )
}

export default OutsideAuth;