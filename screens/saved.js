import React from "react";
import { Image, View,Text, ImageBackground, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import styles from "../styles/mainstyles";
const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

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
            <View style={{paddingLeft:5}}>
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
const Items5 = ({like2, img2,name2, star }) => {
    const stars = [];
  
    for (let i = 0; i < star; i++) {
      stars.push(<Image key={i} source={require('../icon/star.png')} />);
    }
  
    for (let i = star; i < 5; i++) {
      stars.push(<Image key={i} source={require('../icon/star(1).png')} />);
    }
  
    return (
        <View>
            <Items2 like={like2} img={img2} name={name2} />
            <View style={[styles.row,{justifyContent:'flex-start',padding:5}]}>{stars}</View>
        </View>
        )
  };
function Saved(){
    return(
        <View style={styles.container}>
            <View style={[styles.header, {justifyContent:'center'}]}>
                <Text  style={{fontWeight:'bold',marginBottom:10,fontSize:17}}>Saved Items</Text>
            </View>
            <View style={{width:width, height:2, backgroundColor:'#979595'}}></View>
            <ScrollView style={{marginBottom:80}}>
                <View style={styles.row}>
                    <Items5 like2={1} img2={require('../img/onemissionbay.png')} name2="One Mission Bay" star={4}/>
                    <Items5 like2={1} img2={require('../img/1410steiner.png')} name2="1410 Steiner St"  star={5}/>
                </View>
                <View style={styles.row}>
                    <Items5 like2={1} img2={require('../img/246sussex.png')} name2="246 Sussex St"  star={4}/>
                    <Items5 like2={1} img2={require('../img/1206market.png')} name2="1206 Market St"  star={3}/>
                </View>   
                <View style={styles.row}>
                    <Items5 like2={1} img2={require('../img/bitch.png')} name2="55 Sussex St"  star={4}/>
                    <Items5 like2={1} img2={require('../img/463eureka.png')} name2="463 Eureka St"  star={3}/>
                </View>  
            
            </ScrollView>
            <View style={styles.bar}>
                <Items3  bg={require('../icon/home.png')} txt="Home" />
                <Items3 bg={require('../icon/collections.png')} txt="Categories" />
                <Items3 slt={1} bg={require('../icon/saved-slt.png')} txt="Saved" />
                <Items3 bg={require('../icon/search.png')} txt="Search" />
            </View>
        </View>
    )
}
export default Saved;