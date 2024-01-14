import {View, Text, TouchableOpacity, Button, ScrollView, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { doc, setDoc, collection, addDoc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import {FIREBASE_DB} from '../../FirebaseConfig';
import images from '../../constants/images';
import icons from '../../constants/icons';

const Map = () => {
  return(
    <View style = {{flex: 1, justifyContent: 'space-around', alignItems: 'center', justifyContent: 'center'}}>
      <View style = {{width :"100%", height: "100%"}}>

        <Image source = {images.TisMap} style = {{resizeMode: 'cover', width: "100%", height: "100%"}}/>

        <View style = {{backgroundColor: 'rgba(0,0,0,0.8)', height: 55, width: 380, position: 'absolute', top : 30, alignSelf: 'center', borderRadius: 60, justifyContent: 'center', alignItems: 'flex-end'}}>
          <View style = {{width: 25, height :25, marginRight: 20}}>
            <Image source ={icons.SearchIcon} style = {{resizeMode: 'stretch', width: "100%", height: "100%", tintColor: 'white'}}/>
          </View>
        </View>

        <View style = {{backgroundColor: 'rgba(0,0,0,0.95)', height: 60, width: 380, position: 'absolute', bottom : 20, alignSelf: 'center', borderRadius: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <View style = {{width: 25, height :25, marginLeft: 20}}>
            <Image source ={icons.SearchFocused} style = {{resizeMode: 'stretch', width: "100%", height: "100%", tintColor: 'white'}}/>
          </View>
          <Text style = {{fontFamily: 'Poppins-Regular', fontSize: 20, color: 'white'}}>Filtres</Text>
          <View style = {{width: 25, height :25, marginRight: 20}}/>
        </View>

        <View style = {{height: "100%", width: "100%", position: 'absolute', top : 0, justifyContent: 'center', alignItems: 'center'}}>
          <View style = {{backgroundColor: 'rgba(14,55,83,255)', height: 55, justifyContent: 'center', width: 300, alignItems: 'center', borderRadius: 20}}> 
            <Text style = {{fontFamily: 'Poppins-Regular', fontSize: 22, color: 'white'}}>Pas Encore Disponible</Text>
          </View>
        </View>

      </View>
    </View>
  )
}

export default Map