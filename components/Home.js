import React from 'react'
import {Text, View, StyleSheet, Button, color} from 'react-native'

const Home=({navigation}) => {
  return(
    <View>
      <Text>Aplikasi Daftar Teman</Text>
      <Button title ='Daftar Teman'
      onPress={() => navigation.navigate ('About')} 
      color = '#34282C'
      />
      </View>
  )
}
export default Home;