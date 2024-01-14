import { View, Text, TextInput, ActivityIndicator, TouchableOpacity, KeyboardAvoidingView, Keyboard, ImageBackground, Image } from 'react-native';
import React, {useState} from 'react';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import {signInWithEmailAndPassword } from 'firebase/auth';
import styles from '../styles/OutsideStyles';
import { useNavigation } from '@react-navigation/native';
import images from '../constants/images';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;
    const navigation = useNavigation();

    const LogIn = async () => {
        Keyboard.dismiss();
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            alert('Error!');
        } finally{
            setLoading(false);
        }
    }
    const LogInCheat = async () => {
      Keyboard.dismiss();
      setLoading(true);
      try {
          const response = await signInWithEmailAndPassword(auth, "a@a.com", "123456");
      } catch (error) {
          alert('Error!');
      } finally{
          setLoading(false);
      }
  }
  return (
    <KeyboardAvoidingView>
        <ImageBackground source ={images.BackG} style = {styles.HeaderBack}>
            <View style = {{width: "80%", height: "70%"}}>
              <View style = {styles.logoconcon}>
                <View style ={styles.logocon}>
                    <Image source = {images.LOGO} style = {styles.logoimg}/>
                </View>
              </View>
              <View style ={styles.inputconcon}>
                <View style = {{marginBottom: 25}}>
                  <Text style = {styles.inputtitle}> EMAIL</Text>
                  <View style = {styles.inputcon}>
                    <TextInput placeholder='Etudiant@OnlyPlans.com' autoCapitalize = {"none"} placeholderTextColor="#CBCBCB" style = {styles.inputtext} onChangeText={(text) => setEmail(text)}/>
                  </View>
                </View>
                <View>
                  <Text style = {styles.inputtitle}> PASSWORD</Text>
                  <View style = {styles.inputcon}>
                    <TextInput placeholder='password' secureTextEntry={true} placeholderTextColor="#CBCBCB" style = {styles.inputtext} onChangeText={(text) => setPassword(text)}/>
                  </View>
                </View>
              </View>
              <View style = {{height: "20%", justifyContent: 'flex-end'}}>
                <TouchableOpacity onPress={()=> navigation.navigate("SignUp")}>
                  <Text style= {styles.navchange}>No Account yet? Create an Account here.</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={LogIn} style = {styles.btn}>
                  <Text style = {styles.btntitle}>log in</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity activeOpacity={1} onPress={LogInCheat} style = {styles.btn2}>
                  <Image source = {images.Google} style = {{resizeMode: 'contain', width: '100%', height: '90%'}}/>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </KeyboardAvoidingView>
  )
}

export default Login