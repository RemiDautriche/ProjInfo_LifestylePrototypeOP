import { NavigationContainer } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import {User, onAuthStateChanged} from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import InsideAuth from './(Inside)/InsideAuth';
import OutsideAuth from './(Outside)/OutsideAuth';

//{auth.currentUser?.email}
export default function App() {

  const[loaded,error] = useFonts({
    'Baloo2-Bold': require('./assets/fonts/Baloo2-Bold.ttf'),
    'Baloo2-Medium': require('./assets/fonts/Baloo2-Medium.ttf'),
    'Baloo2-Regular': require('./assets/fonts/Baloo2-Regular.ttf'),
    'Baloo2-SemiBold': require('./assets/fonts/Baloo2-SemiBold.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'DMSans-Regular': require('./assets/fonts/DMSans-Regular.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
  });


// Expo Router uses Error Boundaries to catch errors in the navigation tree.

  useEffect(() => {
  if (loaded) {
    SplashScreen.hideAsync();
  }
  }, [loaded]);

  if (!loaded) {
  return null;
  }
  return <RootLayoutView/>
}
//User associated to user in firebase auth

function RootLayoutView() {
  const [user, setUser] = useState(null);

  useEffect( () => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    })
}, []); 

  return (
    <NavigationContainer>
        {user ? <InsideAuth/> : <OutsideAuth/>}
    </NavigationContainer>
  );
}
  
