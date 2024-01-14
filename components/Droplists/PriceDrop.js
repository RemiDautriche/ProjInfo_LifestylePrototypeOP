import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Pressable,
  Image
} from 'react-native';
import icons from '../../constants/icons';

  const PriceFilter = () => {
    const [price, setPrice] = useState(0)
    const [price1, setPrice1] = useState(false);
    const [price2, setPrice2] = useState(false);
    const [price3, setPrice3] = useState(false);


    const price1s = () => {
      setPrice(1);
      setPrice1(true);
      setPrice2(false);
      setPrice3(false);
    }
    
    const price2s = () => {
      setPrice(2);
      setPrice1(true);
      setPrice2(true);
      setPrice3(false);
    }

    const price3s = () => {
      setPrice(3);
      setPrice1(true);
      setPrice2(true);
      setPrice3(true);
    }

    return (
      <View style ={{width: '100%', height: 60, justifyContent: 'center', alignItems: 'center', borderLeftWidth: 2, borderRightWidth: 2, borderColor: 'white', flexDirection: 'row', backgroundColor: 'rgba(255,255,255,0.1)'}}>

      <Pressable onPress={price1s} style = {{height: 40, width: 40, marginHorizontal: 10, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={icons.euro} style = {{resizeMode: 'stretch', tintColor: price1? 'white': 'grey', width: "80%", height: "80%"}}/>
      </Pressable>

      <Pressable onPress={price2s} style = {{height: 40, width: 40, marginHorizontal: 10, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={icons.euro} style = {{resizeMode: 'stretch', tintColor: price2? 'white': 'grey', width: "80%", height: "80%"}}/>
      </Pressable>

      <Pressable onPress={price3s} style = {{height: 40, width: 40, marginHorizontal: 10, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={icons.euro} style = {{resizeMode: 'stretch', tintColor: price3? 'white': 'grey', width: "80%", height: "80%"}}/>
      </Pressable>

    </View>
    )

  };


export default PriceFilter;