import { Dimensions } from 'react-native'
var {height, width} = Dimensions.get('window');

export default {
    fullscreen:{
        width,
        height
    },
    center:{
        alignItems: 'center',
        justifyContent: 'center',
    }
}