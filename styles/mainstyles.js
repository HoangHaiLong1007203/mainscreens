import { StyleSheet } from 'react-native';
import {Dimensions} from "react-native";

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header:{
        height:height*.12,
        backgroundColor:'white',
        alignItems:'flex-end',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
    },
    round: {
        borderRadius:36,
        resizeMode:'cover',
        margin:5
    },
    title:{
        fontWeight:'bold',
        fontSize:22, 
        margin:15
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
    },
    cir:{
        height:119,
        width:119,
        borderRadius:20,
        borderWidth:3,
        borderColor:'#979595',
        overflow:'hidden',
    },
    box:{
        height:59,
        backgroundColor:'white'
    },
    bold:{
        fontWeight:'bold'
    },
    lik:{
        position:'absolute',
        zIndex:1,
        margin:5,
        right:5
    },
    left:{
        flexDirection: 'row', 
        justifyContent: 'flex-end',
    },
    bar:{
        backgroundColor:'white',
        padding:10,
        justifyContent:'space-around',
        flexDirection:'row',
        position:'absolute',
        width:width,
        bottom: 0,
    },
    ctg:{
        width:width,
        height:height*.14,
        overflow:'hidden',
        justifyContent:'center',
        alignItems:'center'
    },
    searchbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        backgroundColor:'#E5E5E5'
    },
    input: {
        flex: 1,
        padding: 5,
    },
    icon:{
        marginLeft:10,
        marginRight:10
        // padding:5
    },
    // map: {
    //     width: width,
    //     height: height,
    // },
})
export default styles;