import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Image
} from 'react-native';

  const PeopleFilter = () => {
    const [people1, setPeople1] = useState(false);
    const [people2, setPeople2] = useState(false);
    const [people3, setPeople3] = useState(false);
    const [people4, setPeople4] = useState(false);

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

    const people1s = () => {
        setPeople1(!people1);
    }
    const people2s = () => {
        setPeople2(!people2);
    }
    const people3s = () => {
        setPeople3(!people3);
    }
    const people4s = () => {
        setPeople4(!people4);
    }
    

    return (
      <View style ={{width: '100%', height: 70, justifyContent: 'center', alignItems: 'center', borderLeftWidth: 2, borderRightWidth: 2, borderColor: 'white', flexDirection: 'row', backgroundColor: 'rgba(255,255,255,0.1)'}}>

      <Pressable onPress={people1s} style = {[styles.pres, {borderColor: people1? 'white': 'grey',}]}>
        <Text style= {{fontFamily: 'Poppins-Regular', fontSize: 25, color: people1? 'white': 'grey', marginHorizontal: 10}}>Seul</Text>
      </Pressable>

      <Pressable onPress={people2s} style = {[styles.pres, {borderColor: people2? 'white': 'grey',}]}>
        <Text style= {{fontFamily: 'Poppins-Regular', fontSize: 25, color: people2? 'white': 'grey', marginHorizontal: 10}}>Deux</Text>
      </Pressable>

      <Pressable onPress={people3s} style = {[styles.pres, {borderColor: people3? 'white': 'grey',}]}>
        <Text style= {{fontFamily: 'Poppins-Regular', fontSize: 25, color: people3? 'white': 'grey', marginHorizontal: 10}}>3-5</Text>
      </Pressable>

      <Pressable onPress={people4s} style = {[styles.pres, {borderColor: people4? 'white': 'grey',}]}>
        <Text style= {{fontFamily: 'Poppins-Regular', fontSize: 25, color: people4? 'white': 'grey', marginHorizontal: 10}}>6 +</Text>
      </Pressable>

    </View>
    )



  };




export default PeopleFilter;