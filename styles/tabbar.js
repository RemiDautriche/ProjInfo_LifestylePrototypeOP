import { StyleSheet, Dimensions } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    tabbar: {
        backgroundColor: 'black',
        height: 58,
        borderColor: 'transparent'
    },
    TBicons: {
        width: 23,
        height: 23,
        tintColor: 'white'
    },
    EventHeader: {
        width: screenWidth,
        position: "absolute",
        top: 0,
        left: 0,
    },
    EventTitle: {
        fontFamily: "Baloo2-Bold",
        alignSelf: 'center',
        fontSize: 28,
        marginBottom: 5
    },

    EventHeaderTop: {
        height: "67%", 
        backgroundColor: 'green',
        width: screenWidth
    },
    EventMainHeader: {
        backgroundColor: COLORS.primary, 
        height: 92, 
        justifyContent: 'flex-end',
        borderBottomLeftRadius: 33,
        borderBottomRightRadius: 33
    }
});

export default styles;