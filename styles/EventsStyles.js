import { StyleSheet, Dimensions } from "react-native";

import { COLORS } from "../constants";

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({

    BackGImg : {
    resizeMode: 'cover', 
    height: screenHeight, 
    width: screenWidth, 
    position: 'absolute', 
    top: 0
},
    
});

export default styles;