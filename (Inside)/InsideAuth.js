import * as React from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Events from '../(Inside)/(screens)/Events';
import Map from '../(Inside)/(screens)/Map';
import Profile from '../(Inside)/(screens)/Profile';
import Heart from './(screens)/Heart';
import styles from '../styles/tabbar';
import icons from '../constants/icons';
import Search from './(screens)/Search';
import HeaderMain from '../components/Headers/HeaderMain';
import HeaderSearch from '../components/Headers/HeaderSearch';
import HeaderProfile from '../components/Headers/HeaderProfile';
import HeaderHeart from '../components/Headers/HeaderHeart';
import HeaderThing from '../components/Headers/HeaderThing';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ThingPage from './(screens)/ThingPage';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// const config = {
//     animation: 'Spring',
//     config: {
//         stiffness:1000,
//         damping: 50,
//         mass: 3,
//         overshootClamping: false
//     }
// }

const InsideTabs = () => {
    return (
            <Tab.Navigator 
            initialRouteName='Events'
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: styles.tabbar,
                headerTitleAlign: 'center',
   
                }}
            >
                <Tab.Screen 
                    name="Events" 
                    component={Events}
                    options={{
                        headerTransparent: true,
                        header: () => <HeaderMain/>,
                        tabBarIcon: ({focused}) => (
                            <View>  
                                <Image
                                    source={focused? icons.HouseFocused : icons.HouseIcon}
                                    resizeMode='contain'
                                    style = {styles.TBicons}
                                />
                            </View> 
                        )
                    }}
                />
                <Tab.Screen 
                    name="Map" 
                    component = {Map}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({focused}) => (
                            <View>  
                                <Image
                                    source={focused? icons.MapFocused : icons.MapIcon}
                                    resizeMode='contain'
                                    style = {styles.TBicons}
                                />
                            </View> 
                        )
                    }}
                />
                <Tab.Screen 
                    name="Heart" 
                    component={Heart}
                    options={{
                        headerShown: true,
                        headerTransparent: true,
                        header: () => <HeaderHeart/>,
                        tabBarIcon: ({focused}) => (
                            <View>  
                                <Image
                                    source={focused? icons.HeartFocused : icons.HeartIcon}
                                    resizeMode='contain'
                                    style = {styles.TBicons}
                                />
                            </View> 
                        )
                    }}
                />
                <Tab.Screen 
                    name="Profile" 
                    component = {Profile}
                    options={{
                        header: () => <HeaderProfile/>,
                        headerTransparent: true,
                        tabBarIcon: ({focused}) => (
                            <View>  
                                <Image
                                    source={focused? icons.ProfileFocused : icons.ProfileIcon}
                                    resizeMode='contain'
                                    style = {styles.TBicons}
                                />
                            </View> 
                        )
                    }}
                />
            </Tab.Navigator>

    )
}

function InsideAuth() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Inside" component={InsideTabs}  options={{headerShown:false}} />
        <Stack.Screen name="Search" component={Search}  options={{headerShown:true, headerTransparent: true, header: () => <HeaderSearch/>}}/>
        <Stack.Screen name="ThingPage" component={ThingPage}  options={{headerShown:true, headerTransparent: true, header: () => <HeaderThing/>}}/>
      </Stack.Navigator>
    );
  }
export default InsideAuth;