import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Pressable,
  Image
} from 'react-native';
import icons from '../../constants/icons';

  const RatingFilter = () => {
    const [rating1, setRating1] = useState(false)
    const [rating2, setRating2] = useState(false)
    const [rating3, setRating3] = useState(false)
    const [rating4, setRating4] = useState(false)
    const [rating5, setRating5] = useState(false)



    const rating1s = () => {
        setRating1(true);
        setRating2(false);
        setRating3(false);
        setRating4(false);
        setRating5(false);
    }
    const rating2s = () => {
        setRating1(true);
        setRating2(true);
        setRating3(false);
        setRating4(false);
        setRating5(false);
    }
    const rating3s = () => {
        setRating1(true);
        setRating2(true);
        setRating3(true);
        setRating4(false);
        setRating5(false);
    }
    const rating4s = () => {
        setRating1(true);
        setRating2(true);
        setRating3(true);
        setRating4(true);
        setRating5(false);
    }
    const rating5s = () => {
        setRating1(true);
        setRating2(true);
        setRating3(true);
        setRating4(true);
        setRating5(true);
    }
    

    return (
      <View style ={{width: '100%', height: 70, justifyContent: 'center', alignItems: 'center', borderLeftWidth: 2, borderRightWidth: 2, borderColor: 'white', flexDirection: 'row', backgroundColor: 'rgba(255,255,255,0.1)'}}>

      <Pressable onPress={rating1s} style = {{height: 40, width: 40, marginHorizontal: 10, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={icons.star} style = {{resizeMode: 'stretch', tintColor: rating1? 'white': 'grey', width: "80%", height: "80%"}}/>
      </Pressable>

      <Pressable onPress={rating2s} style = {{height: 40, width: 40, marginHorizontal: 10, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={icons.star} style = {{resizeMode: 'stretch', tintColor: rating2? 'white': 'grey', width: "80%", height: "80%"}}/>
      </Pressable>

      <Pressable onPress={rating3s} style = {{height: 40, width: 40, marginHorizontal: 10, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={icons.star} style = {{resizeMode: 'stretch', tintColor: rating3? 'white': 'grey', width: "80%", height: "80%"}}/>
      </Pressable>

      <Pressable onPress={rating4s} style = {{height: 40, width: 40, marginHorizontal: 10, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={icons.star} style = {{resizeMode: 'stretch', tintColor: rating4? 'white': 'grey', width: "80%", height: "80%"}}/>
      </Pressable>

      <Pressable onPress={rating5s} style = {{height: 40, width: 40, marginHorizontal: 10, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={icons.star} style = {{resizeMode: 'stretch', tintColor: rating5? 'white': 'grey', width: "80%", height: "80%"}}/>
      </Pressable>


    </View>
    )

  };


export default RatingFilter;