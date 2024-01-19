import {View, Text, TouchableOpacity, Button, TextInput, Dimensions, Image, StatusBar} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../styles/HeartStyles';
import images from '../../constants/images';
import icons from '../../constants/icons';
import { useState } from 'react';
import Slider from '@react-native-community/slider';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import FavoriteScrollList from "../../components/FavoriteScrollList";

const Heart = () => {

  const screenHeight = Dimensions.get('screen').height;
  const screenWidth = Dimensions.get('screen').width;

  return(
    <>
    <StatusBar backgroundColor="rgba(0, 0, 0, 1)" barStyle='light-content'/>
    <View>
        <Image source = {images.BackG} style = {{resizeMode: 'cover', height: screenHeight, width: screenWidth, position: 'absolute', top: 0}}/>
    </View>    
    <View>
      <FavoriteScrollList/>
    </View>
    
    </>
  )
}

export default Heart