import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Image
} from 'react-native';

  const TimeFilter = () => {
    const [time1, setTime1] = useState(false);
    const [time2, setTime2] = useState(false);

    const styles = StyleSheet.create({
        pres: {
            height: 40, 
            marginHorizontal: 10, 
            justifyContent: 'center', 
            alignItems: 'center', 
            borderWidth: 1, 
            borderRadius: 20, 
            justifyContent: 'center'
        },
      });

    const time1s = () => {
        setTime1(!time1);
    }
    const time2s = () => {
        setTime2(!time2);
    }
    

    return (
      <View style ={{width: '100%', height: 70, justifyContent: 'center', alignItems: 'center', borderLeftWidth: 2, borderRightWidth: 2, borderColor: 'white', flexDirection: 'row', backgroundColor: 'rgba(255,255,255,0.1)'}}>

      <Pressable onPress={time1s} style = {[styles.pres, {borderColor: time1? 'white': 'grey',}]}>
        <Text style= {{fontFamily: 'Poppins-Regular', fontSize: 25, color: time1? 'white': 'grey', marginHorizontal: 10}}>Midi</Text>
      </Pressable>

      <Pressable onPress={time2s} style = {[styles.pres, {borderColor: time2? 'white': 'grey',}]}>
        <Text style= {{fontFamily: 'Poppins-Regular', fontSize: 25, color: time2? 'white': 'grey', marginHorizontal: 10}}>Soir</Text>
      </Pressable>

    </View>
    )



  };




export default TimeFilter;