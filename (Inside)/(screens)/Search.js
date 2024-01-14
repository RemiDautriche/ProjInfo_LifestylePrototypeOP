import React, { useState } from 'react';
import { StyleSheet, View, Image, Dimensions, ImageBackground, ScrollView, Text, TouchableOpacity, Pressable } from 'react-native';
import PriceFilter from '../../components/Droplists/PriceDrop';
import TypeFilter from '../../components/Droplists/TypeDrop';
import RatingFilter from '../../components/Droplists/RatingDrop';
import images from '../../constants/images';
import icons from '../../constants/icons';
import PeopleFilter from '../../components/Droplists/PeopleDrop';
import TimeFilter from '../../components/Droplists/TimeDrop';

const Search = () => {

  const [menuopen, setMenuOpen] = useState(true);
  const [price, setPrice] = useState(0);



  const screenHeight = Dimensions.get('screen').height;
  const screenWidth = Dimensions.get('screen').width;
  



  const Filter = (props) => {

    const [selected, setSelected] = useState(false);

    const selection = () => {
      setSelected(!selected);
    }

    if (selected == false){

      return (
        <TouchableOpacity activeOpacity = {0.9} onPress={selection} style ={{width: '100%', height: 70, justifyContent: 'center', alignItems: 'center', borderLeftWidth: 2, borderRightWidth: 2, borderColor: 'white', backgroundColor: 'rgba(255,255,255,0.1)'}}>
          <Text style ={styles.text}>{props.name}</Text>
        </TouchableOpacity>
      )
    }else {
      if (props.name == 'Prix'){

        return (
        <View>
            <TouchableOpacity activeOpacity = {0.9} onPress={selection} style ={{width: '100%', height: 50, justifyContent: 'center', alignItems: 'center', borderLeftWidth: 2, borderRightWidth: 2, borderColor: 'white', backgroundColor: 'rgba(255,255,255,0.1)'}}>
              <Text style ={styles.text}>{props.name}</Text>
            </TouchableOpacity>

            <PriceFilter/>

        </View>
        )
      }else if (props.name == "Type"){
        return(
        <View>
          <TouchableOpacity activeOpacity = {0.9} onPress={selection} style ={{width: '100%', height: 50, justifyContent: 'center', alignItems: 'center', borderLeftWidth: 2, borderRightWidth: 2, borderColor: 'white', backgroundColor: 'rgba(255,255,255,0.1)'}}>
            <Text style ={styles.text}>{props.name}</Text>
          </TouchableOpacity>

          <TypeFilter/>

        </View>          
        )
      }else if (props.name == "Avis"){
        return (
        <View>
          <TouchableOpacity activeOpacity = {0.9} onPress={selection} style ={{width: '100%', height: 50, justifyContent: 'center', alignItems: 'center', borderLeftWidth: 2, borderRightWidth: 2, borderColor: 'white', backgroundColor: 'rgba(255,255,255,0.1)'}}>
            <Text style ={styles.text}>{props.name}</Text>
          </TouchableOpacity>

          <RatingFilter/>

        </View>   
        )
      }else if (props.name == "Taille de Groupe") {
        return (
        <View>
          <TouchableOpacity activeOpacity = {0.9} onPress={selection} style ={{width: '100%', height: 50, justifyContent: 'center', alignItems: 'center', borderLeftWidth: 2, borderRightWidth: 2, borderColor: 'white', backgroundColor: 'rgba(255,255,255,0.1)'}}>
            <Text style ={styles.text}>{props.name}</Text>
          </TouchableOpacity>

          <PeopleFilter/>

        </View> 
        )
      }
      else {
        return (
        <View>
          <TouchableOpacity activeOpacity = {0.9} onPress={selection} style ={{width: '100%', height: 50, justifyContent: 'center', alignItems: 'center', borderLeftWidth: 2, borderRightWidth: 2, borderColor: 'white', backgroundColor: 'rgba(255,255,255,0.1)'}}>
            <Text style ={styles.text}>{props.name}</Text>
          </TouchableOpacity>

          <TimeFilter/>

        </View> 
        )
      }
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={images.BackG} style ={{height: "100%", width: "100%", resizeMode: 'cover', alignItems: 'center', justifyContent: 'flex-end'}}>
        <View style = {{width: "100%", position: 'absolute', bottom: 0}}>
            <View style = {{height: 30, borderTopLeftRadius: 40,borderTopRightRadius: 40, borderColor: 'white', borderTopWidth: 2, borderLeftWidth: 2,borderRightWidth: 2, backgroundColor: 'rgba(255,255,255,0.1)' }}/>
            <Filter name = 'Type' />
            <Filter name = 'Prix' color = 'lightblue'/>
            <Filter name = 'Avis' color = 'lightblue'/>
            <Filter name = 'Taille de Groupe' color = 'lightblue'/>
            <Filter name = 'Quand' color = 'lightblue'/>
            <View style ={{width: '100%', height: 70, justifyContent: 'center', alignItems: 'center', borderLeftWidth: 2, borderRightWidth: 2, borderColor: 'white', backgroundColor: 'rgba(255,255,255,0.1)'}}>
              <TouchableOpacity style = {{width: "75%", height: "70%", borderWidth: 2, borderColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.1)'}}>
                <Text style ={styles.text}>Valider</Text>
              </TouchableOpacity>
            </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontFamily: 'Poppins-Medium', fontSize: 25, color: 'white'
  }
});

// {centerMenuOptions.map((option, index) => (
//   <Dropdown key={index} title={option} options={optionItems} />
// ))}

export default Search;