import icons from '../constants/icons';
import images from '../constants/images';
import {LinearGradient} from 'expo-linear-gradient';
import React, { useState, useEffect } from 'react';
import { doc, collection, getDoc, onSnapshot } from "firebase/firestore";
import { Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ref, getDownloadURL } from "firebase/storage";
import {FIREBASE_ST, FIREBASE_DB, FIREBASE_AUTH} from '../FirebaseConfig';


const storage = FIREBASE_ST; 
const db = FIREBASE_DB;

const LikeableSearch = ({ item, onPress }) => {

    const screenWidth = Dimensions.get('screen').width;
    const [isLiked, setIsLiked] = useState(false);
    const navigation = useNavigation();
    const [url, setUrl] = useState();
    const [defa, setDefa] = useState(false);

//image getter
    useEffect(() => {
        console.log("IDN at Test: ", item.idn);
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
        if (item.nom == "Empty"){
            setDefa(true);
            console.log("No Likes");
        }else {
            setDefa(false);
            console.log("Some Likes")
        }
        if (item.likedstate == true){
            setIsLiked(true);
        }else{
            setIsLiked(false);
        }
     }, []);
//onpress
    const handlePress = () => {
        //1st
        onPress(item.nom);
    };

//auto refresh of hearts
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'Utilisateurs', FIREBASE_AUTH.currentUser?.email,'Likes'), (snapshot) => {
          snapshot.docChanges().forEach(() => {
            getDoc(doc(db, 'Utilisateurs', FIREBASE_AUTH.currentUser?.email, "Likes", item.nom)).then(docData => {
                if (docData.exists()) {
                    setIsLiked(docData.data().likedstate);
                }
            }).catch((error) => {
                console.log(error)
            })
          });
        });
        return () => unsubscribe();
      }, []);

    if (defa == true) {
        return(
            <View style ={{width: screenWidth, height: '100%', justifyContent: 'center'}}>
                <Text style ={{alignSelf: 'center', fontFamily: 'Poppins-Medium', fontSize: 25, color: 'white'}}>Nothing Liked</Text>
            </View>
        )
    }else{
        return(
            <TouchableOpacity activeOpacity={0.5} onPress= {()=> navigation.navigate("ThingPage", {item})} style ={{width: screenWidth-30, height: 300, borderRadius: 10, alignSelf: 'center'}}>
                <View style = {{width: "100%", height: "73%"}}>
                    <Image source = {{uri: url}} style={{resizeMode: 'cover', width: "100%", height: "100%", borderTopLeftRadius: 10, borderTopRightRadius: 10}}/>
                </View>
                <LinearGradient 
                colors={["rgba(0, 0, 0, 0.9)","rgba(14,55,83,255)" ]}
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1}}
                style = {{height: 55, width: "100%", justifyContent: 'center', top: 0, flexDirection: 'row', borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}
                >
                    <View style = {{width: "80%", justifyContent: 'center', height: "100%"}}>
                        <Text style = {{fontFamily: 'Poppins-Medium', fontSize: 18, marginLeft: 15, color: 'white', marginTop: 5}}>{item.nom}</Text> 
                    </View>
                    <TouchableOpacity onPress={() => handlePress(item.nom)} style = {{width: "20%", justifyContent: 'center', alignItems: 'center'}}>
                        <Image source = {isLiked? icons.HeartFocused : icons.HeartIcon} style = {{resizeMode: 'stretch', height: 24, width: 24, tintColor: 'white'}}/>
                    </TouchableOpacity>
                </LinearGradient>
            </TouchableOpacity>
        )
    }
    

};
export default LikeableSearch;