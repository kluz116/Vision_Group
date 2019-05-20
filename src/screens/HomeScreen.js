import { View, Text, StyleSheet ,FlatList,Image,ActivityIndicator,TouchableOpacity} from "react-native";
import React, { Component } from "react";
import { MenuButton, Logo } from "../components/header/header";




export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <MenuButton onPress={() => navigation.openDrawer()} />,
      headerTitle: <Logo />,
      headerBackTitle: "Home",
      headerLayoutPreset: "center"
    };
  };
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  

  componentDidMount(){
    return fetch('http://jivasengroup.com/apis/new_vision.json')
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
          
              <View style={styles.container} >
                <Image style={styles.imageThumbnail} source = {{ uri: item.flower_image_url }} />
                <TouchableOpacity onPress={() => this.props.navigation.navigate('NewVision')}>
                <Text style={styles.welcome}>{item.flower_name}</Text>
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
    elevation: 5,
    borderWidth: 1, 
    borderColor: '#f0f0f0',
    
    
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
    width:155,
    resizeMode:'contain'
  },

});



