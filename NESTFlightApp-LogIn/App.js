import React from 'react';
import { StyleSheet, Image, ImageBackground, Text, View , Button, } from 'react-native';

export default class ButtonBasics extends Component {
    _onPressButton() {
      alert('The Button works!')
    }
    render () {
      return(
          <View style={styles.container} sty>
            <View> 
              <ImageBackground style={styles.backGround}/>
              <Image 
                source={require('./assets/NF_logo-01.png')} 
                style={{
                  position: 'absolute',
                  justifyContent: 'center',        
                  width: 700, 
                  height: 700, 
                  alignSelf:'center',}}/>
            </View> 

            <View style={styles.buttonContainer}>
              <Button
                onPress={this._onPressButton}
                title="Sign Up" 
                type="raised"
                color="000000"/>
            </View>
        
            <View style={style.otherButtonContainer}>
              <Button 
                onPress={this._onPressButton}
                title="Log In"
                type="raised"
                color="00000"/>
            </View>
          </View>
      );
    }
  }
// Link to solve this button solution
// https://codeburst.io/a-tale-of-three-buttons-exploring-react-native-styling-fa931159ef69

const styles = StyleSheet.create({
  backGround: {
    flex: 1,
    backgroundColor: '#0D0D58',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginView: {
    flex: 1,
    backgroundColor: '#0D0D58',
    alignItems: 'absolute',
    opacity: "70%",
  },
  buttonContainer: {
      flex: 1,
      justifyContent: 'center',
      margin: 20,
    },
  otherButtonContainer: {
      margin: 20,
      flexDirections: 'row',
      justifyContent: 'space-between'     
  }
});
