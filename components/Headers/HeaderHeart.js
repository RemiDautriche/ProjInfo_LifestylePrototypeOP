import { View, Text, StatusBar, Image, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import styles from '../../styles/tabbar';
import images from '../../constants/images'
import icons from '../../constants/icons'
import {LinearGradient} from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function HeaderHeart() {
    
    const navigation = useNavigation();
    const screenWidth = Dimensions.get('screen').width;
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
            <View style ={{width: screenWidth, height: 60, alignItems: 'center', flexDirection: 'row', position: 'absolute'}}>
                <Text style = {{color: 'rgb(199, 233, 255)', fontFamily: "Poppins-Medium", fontSize: 30, marginLeft: 20, marginRight: 20}}> Favoris</Text>
                {/* <Image source ={icons.HeartFocused} style = {{height: 25, width: 25, resizeMode: 'stretch', tintColor: 'rgb(199, 233, 255)', marginBottom: 5}}/> */}
            </View>  
            <TouchableOpacity onPress={()=> navigation.navigate("Search")} style = {{height: 55, width: 80, position: 'absolute', right: 0, justifyContent: 'center'}}> 
                <Image source={icons.SearchIcon} style ={{resizeMode: 'contain', height: 24, width: 24, tintColor: 'white', alignSelf: 'center'}}/>
            </TouchableOpacity>
        </View>
    )
}