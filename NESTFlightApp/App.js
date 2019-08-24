import React from 'react';
import { StyleSheet, Image, ImageBackground, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container} sty>
      <ImageBackground style={styles.container}/>
      <Image 
        source={require('./assets/NF_logo-01.png')} 
        style={{
          position: 'absolute',
          justifyContent: 'center',        
          width: 700, 
          height: 700, 
          alignSelf:'center',}}/>
      <Text 
        style={{
          color: 'white',
          position: 'relative',
          paddingBottom:'15%', 
          }}> Supported by the DigitalNEST </Text>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D58',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
