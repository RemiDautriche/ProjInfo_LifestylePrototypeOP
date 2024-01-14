import { View, Text, Dimensions, ScrollView, FlatList, Image, Button } from 'react-native';
import React from 'react';
import {COLORS} from '../constants';
import icons from "../constants/icons";
import { useEffect, useState } from "react";
import { doc, setDoc, collection, addDoc, getDoc } from "firebase/firestore";
import {FIREBASE_DB} from '../FirebaseConfig';
import ThingFlatList from './ThingFlatList';

const db = FIREBASE_DB;

const screenHeight = Dimensions.get('screen').height;

const CardFlatListTitle = (props) => {
  return (
    <>
        <View style = {{justifyContent: 'center'}}>
            <Text style= {{color: COLORS.white, fontFamily: 'Poppins-Medium', fontSize: 20, marginTop: 25, marginHorizontal: 25, marginBottom: 5}}>{props.title}</Text>
        </View>
        <ThingFlatList type = {props.category}/>
    </>
  )
}

export default CardFlatListTitle