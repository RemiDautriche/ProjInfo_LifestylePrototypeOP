import { View, ScrollView, Image, StatusBar} from 'react-native';
import {COLORS} from '../../constants/theme';
import React from 'react';
import styles from '../../styles/EventsStyles';
import HighlightEvent from '../../components/HighlightEvent';
import CardFlatListTitle from '../../components/CardFlatListTitle';
import images from "../../constants/images";


const Events = () => {
  return (
    <>
      <StatusBar backgroundColor="rgba(0, 0, 0, 1)" barStyle='light-content'/>
      <View>
        <Image source = {images.BackG} style = {styles.BackGImg}/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style ={{overflow: 'visible'}}>
        <View style= {{height: 77}}/>
        <HighlightEvent/>
        <CardFlatListTitle category = {'boite de nuit'} title = {'Les Boites du Moment'}/>
        <CardFlatListTitle category = {'bar'} title = {'Un Verre Entre Amis'}/>
        <CardFlatListTitle category = {'restaurant'} title = {'Un Resto?'}/>
        <CardFlatListTitle category = {'brasserie'} title = {'Choix Originaux'}/>
      </ScrollView>
    </>
        
  )
}

export default Events