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
const Items4 =({bg,txt}) =>{
    return(
        <ImageBackground style={[styles.ctg, {margin:5}]} source={bg}>
            <Text style={{color:'white',fontSize:17}}>{txt}</Text>
            <View style={[styles.ctg,{position:'absolute',backgroundColor:'white', opacity:.25}]}></View>
        </ImageBackground>
    );
};
function Categories(){
    return(
        <View style={styles.container}>
            <View style={[styles.header, {justifyContent:'center'}]}>
                <Text  style={{fontWeight:'bold',marginBottom:10,fontSize:17}}>Categories</Text>
            </View>
            <View style={{width:width, height:2, backgroundColor:'#979595'}}></View>
            <ScrollView style={{marginBottom:80, padding:5}}>
                <Items4  bg={require('../img/houses.png')} txt="Houses" />
                <Items4  bg={require('../img/apartments2.png')} txt="Apartments" />
                <Items4  bg={require('../img/condos.png')} txt="Condos" />
                <Items4  bg={require('../img/land.png')} txt="Land" />
                <Items4  bg={require('../img/buildings.png')} txt="Buildings" />
                <Items4  bg={require('../img/townhouses.png')} txt="Town Houses" />
            </ScrollView>
            <View style={styles.bar}>
                <Items3  bg={require('../icon/home.png')} txt="Home" />
                <Items3 slt={1} bg={require('../icon/colllections-slt.png')} txt="Categories" />
                <Items3 bg={require('../icon/saved.png')} txt="Saved" />
                <Items3 bg={require('../icon/search.png')} txt="Search" />
            </View>
        </View>
    )
}
export default Categories;