import { View, Text, TextInput, ActivityIndicator, TouchableOpacity, KeyboardAvoidingView, Keyboard, ImageBackground } from 'react-native';
import React, {useState} from 'react';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import styles from '../styles/OutsideStyles';
import { useNavigation } from '@react-navigation/native';
import {FIREBASE_DB} from '../FirebaseConfig';
import {collection, addDoc, setDoc, doc,  } from "firebase/firestore";
import images from '../constants/images';


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [prenom, setPrenom] = useState('');
    const [nom, setNom] = useState('');
    const [password2, setPassword2] = useState('');
    const db = FIREBASE_DB;

    const auth = FIREBASE_AUTH;
    const navigation = useNavigation();

    const signUp = async () => {
        Keyboard.dismiss();
        setLoading(true);
        try {
          if (password == password) {
            const response = await createUserWithEmailAndPassword(auth, email, password);
          } else {
            alert('Les mots de passes ne sont pas les memes!');
          }
        } catch (error) {
            alert('Error!');
        } finally{
            setLoading(false);
        }
    };

    function NomPrenom() {
      addDoc(doc(db, "Utilisateurs", FIREBASE_AUTH.currentUser?.email ), {
          Prenom: prenom,
          Nom: nom,
      }).then(() => {
          console.log("Prenom et Nom");
      }).catch((error) => {
          console.log(error)
      });
  };

  return (
    <KeyboardAvoidingView>
        <ImageBackground source ={images.BackG} style = {styles.HeaderBack}>
            <View style = {{width: "80%", height: "70%"}}>
              <View style = {{height: "18%", alignItems: 'center', justifyContent: "center"}}>
                <Text style = {styles.CreateTitle}>Create new</Text>
                <Text style = {styles.CreateTitle}>Account</Text>
              </View>
              <View style={{height: "10%"}}>
                <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
                  <Text style= {styles.navchange}>Already Registered? Log in here.</Text>
                </TouchableOpacity>
              </View>
              <View style ={{height: "55%", justifyContent: 'center', alignContent: 'center'}}>
                <View style = {{marginBottom: 25}}>
                  <Text style = {styles.inputtitle}> NAME</Text>
                  <View style = {styles.inputcon}>
                    <TextInput placeholder='Kevin Doumith' placeholderTextColor="#f0f3f3" style = {styles.inputtext} onChangeText={(text) => setNom(text)}/>
                  </View>
                </View>
                <View style = {{marginBottom: 25}}>
                  <Text style = {styles.inputtitle}> EMAIL</Text>
                  <View style = {styles.inputcon}>
                    <TextInput placeholder='kevindoumith@soutapp.com' autoCapitalize = {"none"} placeholderTextColor="#f0f3f3" style = {styles.inputtext} onChangeText={(text) => setEmail(text)}/>
                  </View>
                </View>
                <View>
                  <Text style = {styles.inputtitle}> PASSWORD</Text>
                  <View style = {styles.inputcon}>
                    <TextInput placeholder='password' secureTextEntry={true} placeholderTextColor="#f0f3f3" style = {styles.inputtext} onChangeText={(text) => setPassword(text)}/>
                  </View>
                </View>
              </View>
              <TouchableOpacity onPress={signUp} style = {styles.btn}>
                <Text style = {styles.btntitle}>sign up</Text>
              </TouchableOpacity>
            </View>
        </ImageBackground>
    </KeyboardAvoidingView>
  )
}

export default SignUp