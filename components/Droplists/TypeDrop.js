import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  Image
} from 'react-native';
import icons from '../../constants/icons';
import { doc, setDoc } from "firebase/firestore";
import {FIREBASE_DB, FIREBASE_AUTH} from '../../FirebaseConfig';
const db = FIREBASE_DB;


  const TypeFilter = () => {
    const [type1, setType1] = useState(false);
    const [type2, setType2] = useState(false);
    const [type3, setType3] = useState(false);


    const type1s = () => {
        setType1(true);
        setType2(false);
        setType3(false);

        setDoc(doc(db, "Utilisateurs",FIREBASE_AUTH.currentUser?.email, "CurrentSearch", "Type"), {
          typelieux: "bar"
        }).catch((error) => {
            console.log(error)
        });
    }
    
    const type2s = () => {
        setType1(false);
        setType2(true);
        setType3(false);

        setDoc(doc(db, "Utilisateurs",FIREBASE_AUTH.currentUser?.email, "CurrentSearch", "Type"), {
          typelieux: "restaurant"
        }).catch((error) => {
            console.log(error)
        });
    }

    const type3s = () => {
        setType1(false);
        setType2(false);
        setType3(true);

        setDoc(doc(db, "Utilisateurs",FIREBASE_AUTH.currentUser?.email, "CurrentSearch", "Type"), {
          typelieux: "boite de nuit"
        }).catch((error) => {
            console.log(error)
        });
    }

    return (
      <View style ={{width: '100%', height: 140, justifyContent: 'space-around', alignItems: 'center', borderLeftWidth: 2, borderRightWidth: 2, borderColor: 'white', backgroundColor: 'rgba(255,255,255,0.1)'}}>

      <Pressable onPress={type1s} style = {{height: 40, width : 180, marginBottom: 10, alignItems: 'center', flexDirection: 'row'}}>
        <Image source={icons.beer} style = {{resizeMode: 'stretch', tintColor: type1? 'white': 'grey', width: 40, height: "80%"}}/>
        <Text style = {{fontFamily: 'Poppins-Medium', fontSize: 18, color: type1? 'white': 'grey', marginLeft: 20}}>Bar</Text>
      </Pressable>

      <Pressable onPress={type2s} style = {{height: 40, width : 180, marginHorizontal: 10, alignItems: 'center', flexDirection: 'row'}}>
        <Image source={icons.cutlery} style = {{resizeMode: 'stretch', tintColor: type2? 'white': 'grey', width: 40, height: "80%"}}/>
        <Text style = {{fontFamily: 'Poppins-Medium', fontSize: 18, color: type2? 'white': 'grey', marginLeft: 20}}>Restaurant</Text>
      </Pressable>

      <Pressable onPress={type3s} style = {{height: 40, width : 180, marginTop: 10, alignItems: 'center', flexDirection: 'row', marginBottom: 6}}>
        <Image source={icons.martini} style = {{resizeMode: 'stretch', tintColor: type3? 'white': 'grey', width: 40, height: "80%"}}/>
        <Text style = {{fontFamily: 'Poppins-Medium', fontSize: 18, color: type3? 'white': 'grey', marginLeft: 20}}>Boite de Nuit</Text>
      </Pressable>

    </View>
    )

  };

export default TypeFilter;