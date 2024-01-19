import React, { useState, useEffect } from 'react';
import { Button, FlatList, Text, View, Image, TouchableOpacity } from 'react-native';
import { doc, setDoc, collection, getDoc, getDocs, query, limit, where, startAfter, startAt, endAt, orderBy } from "firebase/firestore";
import {FIREBASE_DB, FIREBASE_AUTH} from '../FirebaseConfig';
import LikeableComponent from './LikeableComponent';

const db = FIREBASE_DB;
//main func
const ThingFlatList = (props) => {

const ThingRef = collection(db, "Etablissements");
const [data, setData] = useState([]);


//number Randomizer

const genRanNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
   };

//get from personal data:
const handlePress = (nom, idn) => {
    getDoc(doc(db, 'Utilisateurs', FIREBASE_AUTH.currentUser?.email, "Likes", nom)).then(docData => {
        if (docData.exists()) {
            let likedstate = (docData.data().likedstate);
            if (likedstate == true) {
                setDoc(doc(db, 'Utilisateurs', FIREBASE_AUTH.currentUser?.email, "Likes", nom), {
                    likedstate: false,
                    idn: idn
                }).catch((error) => {
                    console.log(error)
                });

            }else {
                setDoc(doc(db, 'Utilisateurs', FIREBASE_AUTH.currentUser?.email, "Likes", nom), {
                    likedstate: true,
                    idn: idn
                }).catch((error) => {
                    console.log(error)
                });
            };
        }else {
                setDoc(doc(db, "Utilisateurs",FIREBASE_AUTH.currentUser?.email, "Likes", nom), {
                    likedstate: true,
                    idn: idn
                }).catch((error) => { 
                    console.log(error)
                });
        }
    }).catch((error) => {
        console.log(error)
    })

 };

 //the setup query
async function queryCollection(){
    var idx = 0;
    let newData = [];
    const collectionRef = collection(db, 'Etablissements')
    const randomNumber = genRanNum(0, 56);
    const q = query(collectionRef,
        where('typelieux', '==', props.type),
        where("Adresse", '!=', "12 Rue des Frères, 67000 Strasbourg"),
        orderBy("Adresse"),
        startAt(randomNumber),
        )
    const Things = await getDocs(q)
    Things.forEach(docData => {
        let nom = (docData.data().Nom);
        let prix =(docData.data().prix);
        let quand =(docData.data().quand);
        let rating = (docData.data().rating);
        let typelieux =(docData.data().typelieux);
        let typesortie =(docData.data().typesortie);
        let idn = (docData._key.path.segments[6]);
        let adresse = (docData.data().Adresse);
        let id = idx++;
        getDoc(doc(db, 'Utilisateurs', FIREBASE_AUTH.currentUser?.email, "Likes", nom)).then(docData => {
            if (docData.exists()) {
                let likedstate = (docData.data().likedstate);
                newData.push({ 
                    nom: nom, 
                    prix: prix, 
                    quand: quand, 
                    rating: rating, 
                    typelieux: typelieux,
                    typesortie: typesortie, 
                    likedstate: likedstate,
                    adresse: adresse,
                    id: id,
                    idn: idn,
                });
            }else {
                newData.push({ 
                    nom: nom, 
                    prix: prix, 
                    quand: quand, 
                    rating: rating, 
                    typelieux: typelieux,
                    typesortie: typesortie, 
                    likedstate: false,
                    id: id,
                    idn: idn,
                });
            }
            setData(newData); 
        })

        
    })
    
}

//start setup
useEffect(() => {
    queryCollection();

 }, []);
   
const renderItem = ({ item }) => (
    <LikeableComponent item={item} onPress={() => handlePress(item.nom, item.idn)}/>
);


 return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator = {false}
      />

    </View>
 );
};

export default ThingFlatList