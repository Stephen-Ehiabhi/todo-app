import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Nav(){
 return(
    <View>
         <Text style={styles.nav}>Todo app</Text>
    </View>                     
 )    
}

const styles = StyleSheet.create({     
  nav: {
    backgroundColor: "#632b6c",
    height: 90,
    paddingTop: 33,
    fontWeight: "bold",
    color: "#fff",
    fontSize: 30,
    textAlign: "center",
  },                
})