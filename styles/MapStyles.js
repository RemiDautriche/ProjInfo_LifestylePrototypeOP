import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
    MapWord: {
        fontFamily: "Baloo2-Bold", 
        fontSize: 40, 
        textShadowColor: 'rgba(0, 0, 0, 0.75)', 
        textShadowOffset: { width: -1, height: 1 }, 
        textShadowRadius: 1
    },
    MidFlexBox: {
        width: 100, 
        flex: 4, 
        justifyContent:'center', 
        alignItems:'center', 
        alignSelf: 'center'
    },
    ChurchMap:{
        width: 142, 
        height:278, 
    },
    TopFlexBox: {
        width: "100%", 
        flex: 1, 
        lignSelf: 'center', 
        padding:15
    },
    BottomFlexBox: {
        width: 100, 
        flex: 1, 
        alignSelf: 'center'
    },
    SAView: {
        flex:1, 
        backgroundColor: COLORS.lightWhite
    }
});

export default styles;