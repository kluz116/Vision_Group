import React, {Component} from 'react';
import {View, StyleSheet } from 'react-native'
import Drawer from './src/navigators/drawer-navigator';
export default class App extends React.Component {

  
  render() {
    return (
      
      <View style = {styles.MainContainer}>
 
         <Drawer/>
      </View>
    );
  }
}
const styles = StyleSheet.create(
  {
   
  MainContainer: 
  {
   
  flex: 1,
   
   
  // Set hex color code here.
  backgroundColor: '#FFEB3B',
   
  }
   
  });
   

