import icons from '../constants/icons';
import images from '../constants/images';
import {LinearGradient} from 'expo-linear-gradient';
import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { ref, getDownloadURL } from "firebase/storage";
import {FIREBASE_ST, FIREBASE_DB, FIREBASE_AUTH} from '../FirebaseConfig';
import { doc, collection, getDoc, onSnapshot, setDoc } from "firebase/firestore";
import { useNavigation } from '@react-navigation/native';

const storage = FIREBASE_ST; 
const db = FIREBASE_DB;

const LikeableComponent = ({ item, onPress }) => {

    const [isLiked, setIsLiked] = useState(false);
    const [url, setUrl] = useState();
    const navigation = useNavigation();

//image getter
    useEffect(() => {
        const func = async () => {
        const reference = ref(storage, `Etablissements/${item.idn}.jpg`);
        await getDownloadURL(reference).then((x) => {
            setUrl(x);
        })
        }

        if (url == undefined) {func()};
    }, []);
    
//liked State Setup
    useEffect(() => {
        if (item.likedstate == true){
            setIsLiked(true)
        }else{
            setIsLiked(false)
        }
     }, []);

//onpress of like   
    const handlePress = () => {
        onPress(item.nom);
        if (isLiked == true){
            setIsLiked(false)
        }else{
            setIsLiked(true)
        }
    };

//auto refresh of hearts
useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'Utilisateurs', FIREBASE_AUTH.currentUser?.email,'Likes'), (snapshot) => {
      snapshot.docChanges().forEach(() => {
        getDoc(doc(db, 'Utilisateurs', FIREBASE_AUTH.currentUser?.email, "Likes", item.nom)).then(docData => {
            if (docData.exists()) {
                setIsLiked(docData.data().likedstate);
            }else {
                setDoc(doc(db, "Utilisateurs",FIREBASE_AUTH.currentUser?.email, "Likes", item.nom), {
                    idn: item.idn,
                    likedstate: false,
                }).catch((error) => {
                    console.log(error)
                });
            }
        }).catch((error) => {
            console.log(error)
        })
      });
    });
    return () => unsubscribe();
  }, []);

    return(
    <TouchableOpacity activeOpacity={0.5} onPress= {()=> navigation.navigate("ThingPage", {item})} style ={{backgroundColor: 'black', marginRight: 6, width: 170, height: 210, borderRadius: 10, marginLeft: 15 }}>
        <View style = {{width: "100%", height: 150}}>
            <Image source = {{uri: url}} style={{resizeMode: 'cover', width: "100%", height: "100%", borderTopLeftRadius: 10, borderTopRightRadius: 10}}/>
        </View>
        <LinearGradient 
        colors={["rgba(0, 0, 0, 0.9)","rgba(14,55,83,255)" ]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style = {{height: 55, width: "100%", justifyContent: 'center', top: 0, flexDirection: 'row', borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}
        >
            <View style = {{width: "70%", justifyContent: 'center', height: "100%"}}>
               <Text style = {{fontFamily: 'Poppins-Regular', fontSize: 18, marginLeft: 12, color: 'white', marginVertical: 5}}>{item.nom}</Text> 
            </View>
            <TouchableOpacity onPress={() => handlePress(item.nom)} style = {{width: "30%", justifyContent: 'center', alignItems: 'center'}}>
                <Image source = {isLiked? icons.HeartFocused: icons.HeartIcon} style = {{resizeMode: 'stretch', height: 24, width: 24, tintColor: 'white'}}/>
            </TouchableOpacity>
        </LinearGradient>
    </TouchableOpacity>
    )
};
//<Image source = {isLiked? icons.HeartFocused : icons.HeartIcon} style = {{resizeMode: 'stretch', height: 24, width: 24, tintColor: 'white'}}/>
export default LikeableComponent;