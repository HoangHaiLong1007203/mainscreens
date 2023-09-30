import React from "react";
import { Image, View,Text, ImageBackground, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import styles from "../styles/mainstyles";
const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const Items =({bg,txt}) =>{
    return(
        <View style={styles.cir}>
            <Image style={{resizeMode:'cover'}} source={bg} />
            <View style={styles.box}>
                <Text  style={{fontWeight:'bold', padding:10}}>{txt}</Text>
            </View>
        </View>
    );
};
const Items2 =({like, img,name}) =>{
    let imageSource;

    if (like === 1) {
        imageSource = require('../icon/liked.png');
    } else {
        imageSource = require('../icon/heart.png');
    }
    return(
        <View>
            <View style={styles.left}>
                <Image style={styles.lik} source={imageSource} />
            </View>
            <Image  style={{resizeMode:'cover'}}  source={img} />
            <View  style={{paddingLeft:5}}>
                <Text style={{fontWeight:'bold',fontSize:15}}>{name}</Text>
                <Text style={{fontSize:12}}>San Francisco, CA</Text>
            </View>
        </View>
    );
}
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
function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.round} source={require('../img/avt.png')} />
                <Text  style={{fontWeight:'bold',marginBottom:10,fontSize:17,left:10}}>Home</Text>
                <View style={[styles.header,]}>
                    <Image source={require('../icon/add.png')} />
                    <Image source={require('../icon/map.png')} />
                </View>
            </View>
            <View style={{width:width, height:2, backgroundColor:'#979595'}}></View>
            <ScrollView style={{marginBottom:80}}>
                <View>
                    <Text  style={styles.title}>Categories</Text>
                    <View style={styles.row}>
                        <Items bg={require('../img/houses.png')} txt="Houses" />
                        <Items bg={require('../img/apartments.png')} txt="Apartments" />
                        <Items bg={require('../img/condos.png')} txt="Condos" />
                    </View>
                </View>
                <View>
                    <Text  style={styles.title}>Categories</Text>
                    <View style={styles.row}>
                        <Items2 like={1} img={require('../img/onemissionbay.png')} name="One Mission Bay" />
                        <Items2  img={require('../img/1410steiner.png')} name="1410 Steiner St" />
                    </View>
                    <View style={styles.row}>
                        <Items2 like={1} img={require('../img/246sussex.png')} name="246 Sussex St" />
                        <Items2 like={1} img={require('../img/1206market.png')} name="1206 Market St" />
                    </View>
                </View>
                <TouchableOpacity style={{margin:10, width:width*.9, borderColor:'#20C065', borderRadius:10, borderWidth:2,alignSelf:'center'}}>
                    <Text style={{color:'#20C065', padding:10, alignSelf:'center',}}>Show All(7)</Text>
                </TouchableOpacity>
                
            </ScrollView>
            <View style={styles.bar}>
                <Items3 slt={1} bg={require('../icon/home-slt.png')} txt="Home" />
                <Items3 bg={require('../icon/collections.png')} txt="Categories" />
                <Items3 bg={require('../icon/saved.png')} txt="Saved" />
                <Items3 bg={require('../icon/search.png')} txt="Search" />
            </View>
        </View>
        
    )
}
export default Home;