import React, {Component} from 'react';
import {View, StyleSheet } from 'react-native'
import Drawer from './src/navigators/drawer-navigator';
export default class App extends React.Component {

  
  render() {
    return (
      
      <View style = {styles.AppContainer}>
         <Drawer/>
      </View>
    );
  }
}
const styles = StyleSheet.create(
  {
   
  AppContainer: 
  {
      flex: 1,
      backgroundColor: '#f0f0f0',
   
  }
   
  });
   

