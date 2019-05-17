import { View, Text, StyleSheet,Image,FlatList } from "react-native";
import { Button, Card, Divider } from 'react-native-elements';
import React, { Component } from "react";
import { MenuButton, Logo } from "../components/header/header";
import CalendarPicker from 'react-native-calendar-picker';


export default class NewVisionScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <MenuButton onPress={() => navigation.openDrawer()} />,
      headerTitle: <Logo />,
      headerBackTitle: "Profile",
        headerLayoutPreset: "center"
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }
 
  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    
    return (
      <FlatList
      data={[ {id: 'Purchase'}
    
    ]}  
      keyExtractor={item => item.id}
      numColumns={1}
      renderItem={({ item }) => {
        return (

              <View style={styles.container}>
              <View >
              
              <CalendarPicker onDateChange={this.onDateChange} />
              <Image
                source={require('../assets/vs_one.jpg')}
                resizeMode = "contain"
                style = {{width: 350, height:450,marginTop: 5,alignSelf:'center'}}/>
              
              </View>
              <Divider style={{ backgroundColor: '#dfe6e9' }} />
              <View>
       
              <Button title="Get This Copy Please" type="outline" onPress={() => this.props.navigation.navigate('PaymentsOption')}/>

              </View>

              </View>
        );
      }}
    />
    );
  }

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    marginTop:10,
  }, list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  welcome: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: "#d93737"
  },
  imageThumbnail: {
    height: 130,
    width:150,
    
  },

});
