import { View, Text, StyleSheet,Image,FlatList,ActivityIndicator,TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { MenuButton, Logo } from "../components/header/header";



export default class PaymentOptionScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <MenuButton onPress={() => navigation.openDrawer()} />,
      headerTitle: <Logo />,
      headerBackTitle: "Profile",
      
      headerLayoutPreset: "center"
    };
  };
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  

  componentDidMount(){
    return fetch('http://jivasengroup.com/apis/payments.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <FlatList
      data={this.state.dataSource}
      keyExtractor={item => item.id}
      numColumns={2}
      renderItem={({ item }) => {
        return (

              <View style={styles.container}>
        
              <Image style={styles.imageThumbnail}  source = {{ uri: item.image_url }}  resizeMode = "cover" />
              <TouchableOpacity onPress={() => this.props.navigation.navigate('MakePayments')}>
                   <Text style={styles.welcome}>{item.payment_method}</Text>
              </TouchableOpacity>
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
    margin: 5,
    minWidth: 170,
    maxWidth: 223,
    height: 170,
    maxHeight: 304,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    marginTop:10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
    borderWidth: 1, 
    borderColor: '#f0f0f0',
  }, list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  welcome: {
    fontSize: 16,
    textAlign: 'center',
    margin: 8,
    color: "#000",
    fontWeight: '400',
  },
  imageThumbnail: {
    height: 100,
    width:150,
    marginTop:8
    
  },

});
