import { StyleSheet, Dimensions } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    HeaderBack: {
        height: screenHeight,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    logocon: {
        height: 180, 
        width : 250, 
        marginBottom: 30,
    },
    logoconcon: {
        height: "18%", 
        alignItems: 'center', 
        justifyContent: "center"
    },
    logoimg: {
        resizeMode: 'contain', 
        height: "100%", 
        width: "100%", 
        tintColor: "#0db5e2"
    },
    inputconcon: {
        height: "55%", 
        alignContent: 'center', 
        justifyContent: 'center'
    },
    inputcon: {
        backgroundColor: '#777777', 
        height: 50, 
        borderRadius: 10
    },
    inputtext:{
        height: "100%", 
        marginLeft: 8, 
        fontSize: 16, 
        fontFamily: 'Poppins-Light', 
        color: 'white'
    },
    inputtitle: {
        color: 'white', 
        fontSize: 15, 
        fontFamily: 'DMSans-Regular', 
        marginBottom: 5
    },
    navchange: {
        alignSelf: 'center', 
        color: 'white', 
        fontSize: 14
    },
    btntitle: {
        color: "#fffff0", 
        fontSize: 21, 
        fontFamily: 'Poppins-Bold'
    },
    btn: {
        backgroundColor: '#247AAB', 
        height: 55, width: "100%", 
        borderRadius: 13, 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 12,
        marginBottom: 30
    },
    CreateTitle: {
        fontSize: 40, 
        color: 'white', 
        fontFamily: 'Poppins-Medium'
    },
    btn2: {
        backgroundColor: 'white',
        height: 55, width: "100%", 
        borderRadius: 13, 
        justifyContent: 'center', 
        alignItems: 'center', 
    },
});

export default styles;