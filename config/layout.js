import { Dimensions, Platform } from 'react-native'
var {height, width} = Dimensions.get('window');

export default {
    fullscreen: {
        width,
        height
    },
    fullscreenPadding: {
        paddingHorizontal: 15,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    font:{
        //fontFamily: Platform.OS !== 'ios' ? 'sans-serif' : 'san-francisco'
    },
    shadow:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    }
}