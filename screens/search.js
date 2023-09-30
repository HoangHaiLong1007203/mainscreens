import React,{useState} from "react";
import { Image, View,Text, TextInput, ImageBackground, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import styles from "../styles/mainstyles";
const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');


const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const clearSearch = () => {
      setSearchQuery('');
    };
    return (
      <View style={styles.searchbar}>
        <Image style={styles.icon} source={require('../icon/search.png')}/>
        <TextInput
          style={styles.input}
          onChangeText={setSearchQuery}
          value={searchQuery}
          placeholder="Search"
        />
        <TouchableOpacity onPress={clearSearch}>
            <Image style={styles.icon} source={require('../icon/cancel.png')}/>
        </TouchableOpacity>
    </View>
    );
  };
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
const Items6 =({img, name, time, price}) =>{
    return(
        <View style={[styles.row,{justifyContent:'flex-start'}]}>
            <Image style={{width:100, height:100}} source={img}/>
            <View style={{padding:10,justifyContent:'space-between'}}>
                <Text style={[styles.bold,{fontSize:15}]}>{name}</Text>
                <Text>{time}</Text>
                <View style={[styles.row,{width:width*.7,bottom:-10}]}>
                    <Text style={[styles.bold,{fontSize:14,left:-10}]}>San Francisco, CA</Text>
                    <Text>{price}</Text>
                </View>
            </View>            
        </View>
    )
}
function Search(){
    return(
        <View style={styles.container}>
            <View style={[styles.header, {justifyContent:'center'}]}>
                <SearchBar/>
            </View>
            <View style={{width:width, height:2, backgroundColor:'#979595'}}></View>
            <ScrollView style={{marginBottom:80}}>
                <Items6  img={require('../img/onemissionbay.png')} name="One Mission Bay" time="14 days ago" price="$2,950,000"/>
                <Items6  img={require('../img/1410steiner.png')} name="1410 Steiner St" time="9 days ago" price="$3,9279,000"/>
                <Items6  img={require('../img/246sussex.png')} name="246 Sussex St" time="7 days ago" price="$1,259,000"/>
                <Items6  img={require('../img/1206market.png')} name="1206 Market St" time="2 hours ago" price="$379,000"/>
                <Items6  img={require('../img/463eureka.png')} name="463 Eureka St" time="4 days ago" price="$3,795,000"/>
                <Items6  img={require('../img/206oceanave.png')} name="206 Ocean Ave #121" time="2 hours ago" price="$899,000"/>                        
            </ScrollView>
            <View style={styles.bar}>
                <Items3  bg={require('../icon/home.png')} txt="Home" />
                <Items3 bg={require('../icon/collections.png')} txt="Categories" />
                <Items3 bg={require('../icon/saved.png')} txt="Saved" />
                <Items3 slt={1} bg={require('../icon/search-slt.png')} txt="Search" />
            </View>
        </View>
    )
}
export default Search;