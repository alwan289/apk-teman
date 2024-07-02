import React from 'react'
import {Text, View, StyleSheet, Button} from 'react-native';

import Contact from './Teman';

  const About = ({navigation}) => {
  return(
    <View>
    <Contact
      gambar={require("./Agung.jpg")}
      judul="AGUNG MOCHAMAD SACHRIL"
      kelas="TI 6A"/>

    <Contact
      gambar={require("./Behom.jpg")}
      judul="BACHTIAR LAJUARDI"
      kelas="TI 6B"/>

    <Contact
      gambar={require("./Putri.jpg")}
      judul="DINDA PUTRI KHOIRUNNISA"
      kelas="TI 6B"/>

    <Contact
      gambar={require("./Paris.jpg")}
      judul="MUHAMMAD FARISAN AMANUDIN"
      kelas="TI 6B"/>

    <Contact
      gambar={require("./wili.jpg")}
      judul="WILI SEPTIANDI"
      kelas="TI 6A"/>
      

      <Button title="BACK" onPress={()=> navigation.goBack()} color = '#C0392B'/>
    </View>
  )
}

export default About;