import { View, Text,Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import images from '../constants/images';
import {COLORS} from '../constants';


const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const HighlightEvent = () => {

  const PosX = 8;
  const PosY = 20;

  return (
    <View>
        <View style = {{marginVertical: "1%", justifyContent: 'center'}}>
            <Text style= {{color: COLORS.white, fontFamily: 'Poppins-Medium', fontSize: 20, marginLeft: 20}}>Offres du Moment</Text>
        </View>
        <View style = {{width : screenWidth-30, height :300, alignSelf: 'center'}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style = {{overflow: 'visible'}}>

            <TouchableOpacity activeOpacity={0.5} style = {{width: screenWidth-30, height: "100%", marginRight: 20}}>
              <Image source = {images.HL3} style = {{resizeMode:'cover', height: '100%', width : '100%', borderRadius: 12}}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}  style = {{width: screenWidth-30, height: "100%", marginRight: 20}}>
              <Image source = {images.HL2} style = {{resizeMode:'cover', height: '100%', width : '100%', borderRadius: 12}}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}  style = {{width: screenWidth-30, height: "100%", marginRight: 20}}>
              <Image source = {images.HL4} style = {{resizeMode:'cover', height: '100%', width : '100%', borderRadius: 12}}/>
            </TouchableOpacity>

          </ScrollView>
        </View>
    </View>

  )
}

export default HighlightEvent