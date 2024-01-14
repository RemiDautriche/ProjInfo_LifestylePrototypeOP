import {View, Text, ActivityIndicator, TouchableOpacity, StatusBar, Image, Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../styles/ProfileStyles';
import { FIREBASE_AUTH, FIREBASE_DB } from '../../FirebaseConfig';
import {collection, addDoc, getDoc, doc } from "firebase/firestore";
import {useState, useEffect} from 'react';
import {onAuthStateChanged} from 'firebase/auth';
import images from "../../constants/images";
import icons from "../../constants/icons";

const Profile = () => {

    const TC = 'white';
    const screenHeight = Dimensions.get('screen').height;
    const screenWidth = Dimensions.get('screen').width;
    const [username, setUsername] = useState('');

    
        onAuthStateChanged(FIREBASE_AUTH, () => {
            getDoc(doc(FIREBASE_DB, 'Utilisateurs', FIREBASE_AUTH.currentUser?.email)).then(docData => {

                if (docData.exists()) {
                    setUsername(docData.data().Username);
                    
                }else {
                    console.log("No such data")
                }
            }).catch((error) => {
                console.log(error)
            })
        })



    return(

    <>
    <StatusBar backgroundColor="rgba(0, 0, 0, 1)" barStyle='light-content'/>
    <View>
        <Image source = {images.BackG} style = {{resizeMode: 'cover', height: screenHeight, width: screenWidth, position: 'absolute', top: 0}}/>
    </View>    
    <View style= {{height: 77, backgroundColor: 'rgba(0, 0, 0, 0)'}}/>
    <View style ={{backgroundColor: 'rgba(0, 0, 0, 0)', width : screenWidth, height: screenHeight*0.2, flexDirection: 'row', alignItems: 'center'}}>
        <View style = {{width: "30%", alignItems: 'flex-end'}}>
            <View style = {{width: 90, height: 90}}>
                <Image source = {images.ProfilePic} style= {{resizeMode: 'contain', width: "100%", height: "100%", borderRadius: 90}}/>
            </View>
        </View>
        <View style = {{width: "70%", alignItems: 'center', justifyContent: 'center'}}>
            <Text style = {{fontSize: 30, fontFamily: "Poppins-Bold", marginHorizontal: 25, color: TC}}>{username}</Text>
        </View>
    </View>
    <TouchableOpacity style ={{backgroundColor: 'rgba(0, 0, 0, 0)', height: 65, alignItems: 'center', flexDirection: 'row', marginVertical: 6}}>
        <Text style = {{fontSize: 26, fontFamily: "Poppins-Medium", marginLeft: 25, color: TC}}>Personal Information</Text>
        <Image source= {icons.ArrowR} style= {{height: 20, width: 15, resizeMode: 'stretch', tintColor: TC, marginBottom: 3,  position: 'absolute', right: 25}}/>
    </TouchableOpacity>
    <TouchableOpacity style ={{backgroundColor: 'rgba(0, 0, 0, 0)', height: 65, alignItems: 'center', flexDirection: 'row', marginVertical: 6}}>
        <Text style = {{fontSize: 26, fontFamily: "Poppins-Medium", marginLeft: 25, color: TC}}>Feedback</Text>
        <Image source= {icons.ArrowR} style= {{height: 20, width: 15, resizeMode: 'stretch', tintColor: TC, marginBottom: 3,  position: 'absolute', right: 25}}/>
    </TouchableOpacity>
    <TouchableOpacity style ={{backgroundColor: 'rgba(0, 0, 0, 0)', height: 65, alignItems: 'center', flexDirection: 'row', marginVertical: 6}}>
        <Text style = {{fontSize: 26, fontFamily: "Poppins-Medium", marginLeft: 25, color: TC}}>Questions</Text>
        <Image source= {icons.ArrowR} style= {{height: 20, width: 15, resizeMode: 'stretch', tintColor: TC, marginBottom: 3, position: 'absolute', right: 25}}/>
    </TouchableOpacity>
    <TouchableOpacity style ={{backgroundColor: 'rgba(0, 0, 0, 0)', height: 65, alignItems: 'center', flexDirection: 'row', marginVertical: 6}}>
        <Text style = {{fontSize: 26, fontFamily: "Poppins-Medium", marginLeft: 25, color: TC}}>Privacy Policy</Text>
        <Image source= {icons.ArrowR} style= {{height: 20, width: 15, resizeMode: 'stretch', tintColor: TC, marginBottom: 3,  position: 'absolute', right: 25}}/>
    </TouchableOpacity>
    <TouchableOpacity style ={{backgroundColor: 'rgba(0, 0, 0, 0)', height: 65, alignItems: 'center', flexDirection: 'row', marginVertical: 6}}>
        <Text style = {{fontSize: 26, fontFamily: "Poppins-Medium", marginLeft: 25, color: TC}}>Terms & Conditions of Use</Text>
        <Image source= {icons.ArrowR} style= {{height: 20, width: 15, resizeMode: 'stretch', tintColor: TC, marginBottom: 3,  position: 'absolute', right: 25}}/>
    </TouchableOpacity>
    <TouchableOpacity onPress= {()=>FIREBASE_AUTH.signOut()} style ={{marginTop: 38, marginLeft: 25, width: 85}}>
        <Text style = {{fontSize: 24, fontFamily: "Poppins-Medium", color: 'rgb(255, 110, 102)'}}>Log Out</Text>
    </TouchableOpacity>
    <View style = {{position: 'absolute', width: screenWidth, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', bottom: 8}}>
        <Image source = {icons.InstaIcon} style= {{resizeMode: 'contain', width: 15, height: 15,}}/>
        <Text style ={{color: 'rgba(255, 255, 255, 0.8)', fontSize: 15, marginBottom: 2}}>   onlyplans.official</Text>
    </View>
    </>

                /* <Text style = {styles.MoiTitle}>{FIREBASE_AUTH.currentUser?.email}</Text>
                <Text style = {styles.MoiTitle}>{prenom}</Text>
                <Text style = {styles.MoiTitle}>{nom}</Text> */
                /* <TouchableOpacity style={styles.ConBtn} onPress= {()=>FIREBASE_AUTH.signOut()}> */
    )
}

export default Profile;