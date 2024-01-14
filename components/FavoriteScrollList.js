import React, { useState, useEffect } from 'react';
import { Button, FlatList, Text, View, Image, Dimensions } from 'react-native';
import { doc, setDoc, collection, getDoc, getDocs, query, limit, where, onSnapshot, orderBy, startAt } from "firebase/firestore";
import {FIREBASE_DB, FIREBASE_AUTH} from '../FirebaseConfig';
import icons from '../constants/icons';
import images from '../constants/images';
import {LinearGradient} from 'expo-linear-gradient';
import LikeableComponent from './LikeableComponent';
import LikeableFavorite from './LikeableFavorite';

const db = FIREBASE_DB;

//main func
const FavoriteScrollList = (props) => {
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;
const ThingRef = collection(db, "Etablissements");
const [data, setData] = useState([]);
const [refreshstate, setRefreshState] = useState(false);

//get from personal data for like/unlike:
const handlePress = (item) => {
    //2nd
    getDoc(doc(db, 'Utilisateurs', FIREBASE_AUTH.currentUser?.email, "Likes", item.nom)).then(docData => {
        if (docData.exists()) {
            let likedstate = (docData.data().likedstate);
            if (likedstate == true) {
                setDoc(doc(db, 'Utilisateurs', FIREBASE_AUTH.currentUser?.email, "Likes", item.nom), {
                    idn: item.idn,
                    likedstate: false
                }).catch((error) => {
                    console.log(error)
                });

            }else {
                setDoc(doc(db, 'Utilisateurs', FIREBASE_AUTH.currentUser?.email, "Likes", item.nom), {
                    idn: item.idn,
                    likedstate: true
                }).catch((error) => {
                    console.log(error)
                });
            };
        }else {
                setDoc(doc(db, "Utilisateurs",FIREBASE_AUTH.currentUser?.email, "Likes", item.nom), {
                    idn: item.idn,
                    likedstate: true,
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
    const collectionRefFav = collection(db, 'Utilisateurs', FIREBASE_AUTH.currentUser?.email,'Likes');

    const q = query(collectionRefFav,
        where('likedstate', '==', true),
        orderBy('idn'),
        startAt(1),
        )
    const FavThings = await getDocs(q)
    console.log("How Many Items: ", FavThings.size);
    if ( FavThings.size == 0) {
        console.log('No Likes')
        let nom = "Empty";
        let id = 0;
        let idn = 0;
        newData.push({nom: nom, id: id, idn: idn});
        setData(newData); 
        console.log("IDN at departure: ", idn);
    }else {
        FavThings.forEach(docData => {
            let likedstate = (docData.data().likedstate);
            let idn = (docData.data().idn);
            let id = idx++;
            getDoc(doc(db, 'Etablissements', idn)).then(docData => {
                if (docData.exists()) {
                    let nom = (docData.data().Nom);
                    let prix =(docData.data().prix);
                    let quand =(docData.data().quand);
                    let rating = (docData.data().rating);
                    let typelieux =(docData.data().typelieux);
                    let typesortie =(docData.data().typesortie);
                    let adresse = (docData.data().Adresse);
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
                        idn: idn
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
                        idn: idn
                    });
                }
                setData(newData); 
                console.log("IDN of Like", idn);
            })
    
            
        })
    }

    
}


const Testit = () => {
    console.log('--------refreshed--------');
    queryCollection();
}



//start setup
useEffect(() => {
    console.log('--------start--------');
    queryCollection();
 }, []);
   
const renderItem = ({ item }) => (
    <LikeableFavorite item={item} onPress={() => handlePress(item)}/>
);

 return (
    <View>
        <FlatList
            style ={{height: screenHeight-115, overflow: 'visible', marginTop: 60}}
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            vertical
            showsHorizontalScrollIndicator = {false}
            refreshing = {refreshstate}
            onRefresh = {Testit}
        />
    </View>
 );
};

export default FavoriteScrollList;