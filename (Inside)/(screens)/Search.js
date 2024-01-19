import React, { useState } from 'react';
import { StyleSheet, View, Image, Dimensions, ImageBackground, StatusBar, Text, TouchableOpacity, FlatList} from 'react-native';
import { doc, setDoc, collection, getDoc, getDocs, query, limit, where, onSnapshot, orderBy, startAt } from "firebase/firestore";
import PriceFilter from '../../components/Droplists/PriceDrop';
import TypeFilter from '../../components/Droplists/TypeDrop';
import RatingFilter from '../../components/Droplists/RatingDrop';
import images from '../../constants/images';
import icons from '../../constants/icons';
import PeopleFilter from '../../components/Droplists/PeopleDrop';
import TimeFilter from '../../components/Droplists/TimeDrop';
import {FIREBASE_DB, FIREBASE_AUTH} from '../../FirebaseConfig';
import LikeableSearch from '../../components/LikeableSearch';


const db = FIREBASE_DB;

const Search = () => {

  const [menuopen, setMenuOpen] = useState(true);
  const screenHeight = Dimensions.get('screen').height;
  const screenWidth = Dimensions.get('screen').width;
  const ThingRef = collection(db, "Etablissements");
  const [data, setData] = useState([]);
  const [refreshstate, setRefreshState] = useState(false);




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

const SearchRender = () => {
  getDoc(doc(db, "Utilisateurs",FIREBASE_AUTH.currentUser?.email, "CurrentSearch", "Price")).then(docData => {
      let sprice = (docData.data().p);
      if (sprice == undefined){
        sprice = 1
      };
      getDoc(doc(db, "Utilisateurs",FIREBASE_AUTH.currentUser?.email, "CurrentSearch", "Rating")).then(docData => {
        let srating = (docData.data().r);
        if (srating == undefined){
          srating = 1
        };
        getDoc(doc(db, "Utilisateurs",FIREBASE_AUTH.currentUser?.email, "CurrentSearch", "Type")).then(docData => {
          let stype = (docData.data().typelieux);
          if (stype == undefined){
            stype = "bar"
          };
          console.log(sprice, stype, srating)
            queryCollection(sprice = sprice, srating = srating, stype = stype)
        })
      })  
})

};

 //the setup query
 async function queryCollection(sprice, srating, stype){
  var idx = 0;
  let newData = [];
  const collectionRef = collection(db, 'Etablissements')
  const q = query(collectionRef,
      where('prix', '==', sprice),
      where("rating", '>=', srating),
      where("typelieux", '==', `${stype}`),
      limit(6),
      )
  const Things = await getDocs(q)
  Things.forEach(docData => {
      let nom = (docData.data().Nom);
      let prix =(docData.data().prix);
      let quand =(docData.data().quand);
      let rating = (docData.data().rating);
      let typelieux =(docData.data().typelieux);
      let typesortie =(docData.data().typesortie);
      let idn = (docData._key.path.segments[6]);
      let adresse = (docData.data().Adresse);
      let id = idx++;
      getDoc(doc(db, 'Utilisateurs', FIREBASE_AUTH.currentUser?.email, "Likes", nom)).then(docData => {
          if (docData.exists()) {
              let likedstate = (docData.data().likedstate);
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
                  idn: idn,
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
                  idn: idn,
              });
          }
          setData(newData); 
      })

      
  })
  
};



   
const renderItems = ({ item }) => (
    <LikeableSearch item={item} onPress={() => handlePress(item)}/>
);

  
const ValFilts = () => {
  setMenuOpen(!menuopen);
  SearchRender();
}

const ValFiltsback = () => {
  setMenuOpen(!menuopen);
}

//filters
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

if (menuopen){
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
              <TouchableOpacity onPress={ValFilts} style = {{width: "75%", height: "70%", borderWidth: 2, borderColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.1)'}}>
                <Text style ={styles.text}>Valider</Text>
              </TouchableOpacity>
            </View>
        </View>
      </ImageBackground>
    </View>
  );
}else{
  return(
    <>
    <StatusBar backgroundColor="rgba(0, 0, 0, 1)" barStyle='light-content'/>
    <View>
        <Image source = {images.BackG} style = {{resizeMode: 'cover', height: screenHeight, width: screenWidth, position: 'absolute', top: 0}}/>
    </View>    
    <View>
      <FlatList
          style ={{height: screenHeight-160, overflow: 'visible', marginTop: 70,}}
          data={data}
          renderItem={renderItems}
          keyExtractor={item => item.id}
          vertical
          showsHorizontalScrollIndicator = {false}
        />
    </View>
    <TouchableOpacity onPress={ValFiltsback} style = {{width: 0.75*screenWidth, height: 60, borderWidth: 2, borderColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.3)',position: 'absolute', bottom: 0, alignSelf: 'center'}}>
          <Text style ={styles.text}>Filtres</Text>
    </TouchableOpacity>
    </>
  )
}

 
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