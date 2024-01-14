import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../../styles/tabbar';
import images from '../../constants/images'
import icons from '../../constants/icons'
import {LinearGradient} from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function HeaderMain() {
    
    const navigation = useNavigation();

    return(
        <View>
            <LinearGradient
            colors={['rgba(0, 0, 0, 1)','rgba(0, 0, 0, 0.8)' ]}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={{height: 60, opacity: 0.95}}
            >
            </LinearGradient>
            <LinearGradient
            colors={['rgba(0, 0, 0, 0.8)','rgba(0, 0, 0, 0.5)', 'transparent']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={{height: 17, opacity: 0.95}}
            >
            </LinearGradient>
            <View style = {{height: 55, width: 80, position: 'absolute', left: 10}}> 
                <Image source={images.LOGO} style ={{resizeMode: 'contain', height: "100%", width: "100%"}}/>
            </View>
            <TouchableOpacity onPress={()=> navigation.navigate("Search")} style = {{height: 55, width: 80, position: 'absolute', right: 0, justifyContent: 'center'}}> 
                <Image source={icons.SearchIcon} style ={{resizeMode: 'contain', height: 24, width: 24, tintColor: 'white', alignSelf: 'center'}}/>
            </TouchableOpacity>
        </View>
        //change position of logo relative
    )
}