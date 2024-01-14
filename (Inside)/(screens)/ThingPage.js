import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native'
import images from '../../constants/images';
import styles from '../../styles/EventsStyles';
import {LinearGradient} from 'expo-linear-gradient';
import React, { useState, useEffect } from 'react';
import icons from '../../constants/icons';
import { ref, getDownloadURL } from "firebase/storage";
import {FIREBASE_ST} from '../../FirebaseConfig';

const storage = FIREBASE_ST; 

const ThingPage = ({route}) => {

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;
const { item } = route.params;
const [url, setUrl] = useState();

useEffect(() => {
  const func = async () => {
  const referencefav = ref(storage, `Etablissements/${item.idn}.jpg`);
  await getDownloadURL(referencefav).then((x) => {
      setUrl(x);
  })
  }

  if (url == undefined) {func()};
}, []);

const PriceRating = () => {

  let price = "";
  let pricenot ="";

  if (item.prix == 1) {
    price = "€";
    pricenot = "€€";
  }else if (item.prix == 2){
    price = "€€";
    pricenot = "€";
  }else {
    price = "€€€";
    pricenot = "";
  }

  const Price = () => {
    return (
      <View style ={{flexDirection: 'row', alignSelf: 'center'}}>
        <Text style = {{fontFamily: 'Poppins-Medium', fontSize: 25, color: 'white'}}>{price}</Text>
        <Text style = {{fontFamily: 'Poppins-Medium', fontSize: 25, color: 'rgba(255, 255, 255, 0.3)'}}>{pricenot}</Text>
      </View>
    )
  }


  return(
    <View style ={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 40}}>
      <View>
        <Text style = {{fontFamily: 'Poppins-Medium', fontSize: 20, color: 'white', alignSelf: 'center'}}>Prix:</Text>
        <Price/>
      </View>
      <View>
        <Text style = {{fontFamily: 'Poppins-Medium', fontSize: 20, color: 'white', alignSelf: 'center'}}>Note:</Text>
        <Text style = {{fontFamily: 'Poppins-Medium', fontSize: 25, color: 'white', alignSelf: 'center'}}>{item.rating}★</Text>
      </View>
    </View>
  )
}

const TypeType = () => {

  const Typelogo = () => {
    if (item.typelieux == "bar" || item.typelieux == "brasserie" || item.typelieux == "bar et brasserie"){
      return (
        <Image source = {icons.beer} style = {{resizeMode: 'stretch', height: 22, width: 22, tintColor: 'white'}}/>
      )
    } else if (item.typelieux == "restaurant"){
      return (
        <Image source = {icons.cutlery} style = {{resizeMode: 'stretch', height: 22, width: 22, tintColor: 'white'}}/>
      )
    } else {
      return(
        <Image source = {icons.martini} style = {{resizeMode: 'stretch', height: 22, width: 22, tintColor: 'white'}}/>
      )
    }
  }

  return(
    <View style ={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 40}}>
      <View>
        <Text style = {{fontFamily: 'Poppins-Medium', fontSize: 19, color: 'white', alignSelf: 'center'}}>Quand:</Text>
        <Text style = {{fontFamily: 'Poppins-Medium', fontSize: 22, color: 'white', alignSelf: 'center'}}>{item.quand}</Text>
      </View>
      <View>
        <Text style = {{fontFamily: 'Poppins-Medium', fontSize: 19, color: 'white', alignSelf: 'center'}}>Type de Lieu:</Text>
        <View style = {{flexDirection: 'row', alignSelf: 'center'}}>
          <Typelogo/>
          <Text style = {{fontFamily: 'Poppins-Medium', fontSize: 22, color: 'white'}}> {item.typelieux}</Text> 
        </View>

      </View>
    </View>
  )
}


  return (
    <>
    <View>
        <Image source = {images.BackG} style = {styles.BackGImg}/>
    </View>
    <View style ={{width: screenWidth, height: 0.41*screenHeight , alignSelf: 'center', justifyContent: 'center'}}>
      <Image source = {{uri: url}} style={{resizeMode: 'cover', width: "100%", height: "100%"}}/>
    </View>          
    <LinearGradient
            colors={['rgba(0, 0, 0, 0.1)','rgba(0, 0, 0, 1)' ]}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 0.3}}
            style = {{ alignItems: 'center', position: 'absolute', width: screenWidth, top: screenHeight*0.39, height: 50, justifyContent: 'center'}}>
        <Text style = {{fontFamily: 'Poppins-Medium', fontSize: 30, color: 'white', marginTop: 15}}>{item.nom}</Text>
    </LinearGradient>
    <LinearGradient
            colors={['rgba(0, 0, 0, 1)','rgba(0, 0, 0, 0.1)' ]}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style = {{ alignItems: 'center', position: 'absolute', width: screenWidth, height: 10, justifyContent: 'center'}}>
    </LinearGradient>
    <LinearGradient
            colors={['rgba(0, 0, 0, 1)','rgba(0, 0, 0, 0.3)' ]}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style = {{ alignItems: 'center', width: screenWidth, height: 15, justifyContent: 'center', marginTop: 30}}>
    </LinearGradient>
    {/* content */}
    <View style ={{backgroundColor: 'rgba(0, 0, 0, 0.3)', width: screenWidth, alignSelf: 'center', height: screenHeight*0.49, justifyContent: 'center'}}>

      <View style ={{width: "85%", alignSelf: 'center', height: "66%"}}>

        <Text style = {{fontFamily: 'Poppins-Bold', fontSize: 20, color: 'white', alignSelf: 'center', textAlign: 'center'}}>{item.adresse}</Text>

        <PriceRating/>

        <TypeType/>
      </View>
      <View  style= {{flexDirection: 'row', justifyContent: 'space-around'}}>

        <TouchableOpacity activeOpacity={0.5}>
          <LinearGradient 
          colors={['#082030', '#082030']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style ={{backgroundColor: 'black', width: screenWidth*0.5-30, height: 50, justifyContent: 'center', alignSelf: 'center', borderRadius: 6, marginBottom: 20}}>
            {/* <Image source={images.BackG} style={{resizeMode: '', width: '100%', height: "100%"}}/> */}
            <Text style ={{fontFamily: 'Poppins-Regular', fontSize: 20, color: 'white', alignSelf: 'center'}}> Offres </Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5}>
          <LinearGradient 
          colors={['#082030', '#082030']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style ={{backgroundColor: 'black', width: screenWidth*0.5-30, height: 50, justifyContent: 'center', alignSelf: 'center', borderRadius: 6, marginBottom: 20}}>
            {/* <Image source={images.BackG} style={{resizeMode: '', width: '100%', height: "100%"}}/> */}
            <Text style ={{fontFamily: 'Poppins-Regular', fontSize: 20, color: 'white', alignSelf: 'center'}}> Reserver </Text>
          </LinearGradient>
        </TouchableOpacity>

      </View>

    </View>
    </>
  )
}

export default ThingPage