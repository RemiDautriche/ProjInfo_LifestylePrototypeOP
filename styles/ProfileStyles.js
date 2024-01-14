import { StyleSheet } from "react-native";

import { COLORS } from "../constants";

const styles = StyleSheet.create({
    MoiTitle: { 
        fontFamily: "Baloo2-Regular", 
        fontSize: 40, 
        color: COLORS.primary,
        margin: 7
    },
    ConBtnView: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        padding: 10
    },
    ConBtnCon: {
        justifyContent: 'center',
        alignContent: 'center', 
        padding: 6
    },
    ConBtnText: {
        fontFamily: "Baloo2-Regular", 
        fontSize: 22, 
        color: COLORS.white, 
        alignSelf: 'center'
    },
    ConBtn: {
        justifyContent: 'center', 
        alignContent: 'center', 
        backgroundColor: COLORS.primary, 
        width: "95%", 
        height: 50, 
        alignSelf: 'center', 
        borderRadius: 10}
});

export default styles;