import React from 'react';
import {View,Text,Image,StyleSheet,Button} from 'react-native';

export default function Friend(props) {
  return(
    <View style={styles.container}>
      <Image source={props.gambar} style={styles.img} />
    <View style={styles.teks}>
      <Text style={styles.title}>{props.judul} </Text>
      <Text style={styles.telp}>{props.kelas} </Text>
    </View>
    </View>
  )
}

const styles =StyleSheet.create({

  container:{
    height:100,
    flexDirection:'row',
    alignItems:'center',
    borderBottomWidth:1,
    borderColor:'Blue'
  },
  img:{
    margin:10,
    width:70,
    height:70
  },
  teks:{flex:1},

  title:{
    fontWeight:'bold',
    fontSize:16,
    color: '#2B1B17'
  },
  telp:{
    fontWeight : 'bold',
    fontSize:14,
    color:'#413839'
  }
})