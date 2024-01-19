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

            <View style = {{position: 'absolute', top: 0, flexDirection: 'row', width: "100%", justifyContent: 'space-between'}}> 

                <TouchableOpacity onPress={()=> navigation.goBack(null)} style = {{height: 55, width: "15%", justifyContent: 'center'}}> 
                    <Image source={icons.ArrowL} style ={{resizeMode: 'stretch', height: 22, width: 20, tintColor: 'white', alignSelf: 'center'}}/>
                </TouchableOpacity>

                <View style = {{ width: "85%", height: 55, justifyContent: 'center', marginTop: 0}}>
                    <View style = {{backgroundColor: 'rgba(14,55,83,0.7)', width: '92%', height: "80%", alignSelf: 'center', borderRadius: 20, marginRight: 7, justifyContent: 'center'}}>
                        <Image source = {icons.SearchIcon} style = {{resizeMode: 'contain', width: 22, height: 22, alignSelf: 'flex-end', tintColor: 'white', marginRight: 15}}/>
                    </View>
                </View>
            </View>
        </View>
        //not functional just overlay of functional aspects of search page
    )
}