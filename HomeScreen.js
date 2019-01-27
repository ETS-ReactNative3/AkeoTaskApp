import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight, ImageBackground, TouchableOpacity} from 'react-native';
// import { Button } from 'native-base'

export default class HomeScreen extends Component {

  static navigationOptions = {
    header: null,
    title: 'Home',
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./Assets/images/square_akeo.png')} style={{width: '100%', height: '100%'}}>
        <Text style={styles.welcome}>Welcome to AKEO India</Text>
        
        <TouchableOpacity onPress={() => navigate('Login')} style={styles.submitButton} ><Text style={{textAlign: 'center', fontSize: 30, color: 'white'}}>LOGIN</Text></TouchableOpacity>
        
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  welcome: {
    fontSize: 60,
    color: 'yellow',
    textAlign: 'center',
    margin: 10,
  },
  submitButton: {
    height: 70,
    width: 300,
    backgroundColor: '#f95145',
    borderWidth: 4,
    borderRadius: 11,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    position: 'absolute',
    bottom: 50
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
