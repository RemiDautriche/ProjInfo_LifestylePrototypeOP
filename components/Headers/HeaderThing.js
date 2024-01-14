import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../../styles/tabbar';
import images from '../../constants/images'
import icons from '../../constants/icons'
import {LinearGradient} from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function HeaderSearch() {
    
    const navigation = useNavigation();

    return(
        <TouchableOpacity onPress={()=> navigation.navigate("Heart")} style = {{position: 'absolute', left: 10, top: 10, justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)', height: 45, width: 45, borderRadius: 90}}> 
            <Image source={icons.ArrowL} style ={{resizeMode: 'contain', height: 24, width: 24, tintColor: 'lightblue', alignSelf: 'center', marginRight: 4}}/>
        </TouchableOpacity>
        //change position of logo relative
    )
}