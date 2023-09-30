// import MapView from 'react-native-maps';
import React from "react";
import { Image, View,Text, ImageBackground, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import styles from "../styles/mainstyles";

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const Items3 =({slt,bg,txt}) =>{
    let c;

    if (slt === 1) {
        c = '#20C065';
    } else {
        c = '#4A4A4A';
    }
    return(
        <View style={{alignItems:'center'}}>
            <Image style={{resizeMode:'cover'}} source={bg} />
            <Text style={{color:c}}>{txt}</Text>
        </View>
    );
};

function Map(){
    return(
        <View style={styles.container}>
            <View style={[styles.header, {justifyContent:'space-between'}]}>
                <View style={[styles.header]}> 
                    <Image source={require('../icon/back.png')}/>
                    <Text style={{color:'#20C065',fontSize:17}}>Home</Text>
                </View>
                <Text  style={{fontWeight:'bold',marginBottom:10,fontSize:17,left:-20}}>Map View</Text>
                <Image source={require('../icon/heart.png')}/>            
            </View>
            <View style={{width:width, height:2, backgroundColor:'#979595'}}></View>
            <View style={styles.container}>
                <Image style={{backgroundColor:'gray'}} source={require('../img/San Francisco Map.png')} />
            </View>
            <View style={styles.bar}>
                <Items3 slt={1} bg={require('../icon/home-slt.png')} txt="Home" />
                <Items3 bg={require('../icon/collections.png')} txt="Categories" />
                <Items3 bg={require('../icon/saved.png')} txt="Saved" />
                <Items3 bg={require('../icon/search.png')} txt="Search" />
            </View>
        </View>
        
    )
}
export default Map;