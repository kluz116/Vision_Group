import { View,StyleSheet,Dimensions } from "react-native";
import React, { Component } from "react";
import { MenuButton, Logo } from "../components/header/header";
import Pdf from 'react-native-pdf';


export default class ReadPdfscreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          headerLeft: <MenuButton onPress={() => navigation.openDrawer()} />,
          headerTitle: <Logo />,
          headerBackTitle: "Profile",
          
          headerLayoutPreset: "center"
        };
      };
      render() {
        const source = {uri:'https://archives.visiongroup.co.ug/tmp/pdf_cache/uploads/NV151212pg33.pdf',cache:true};
        return (
            <View style={styles.container}>
                <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages,filePath)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }}
                    style={styles.pdf}/>
            </View>
        )
  }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
    }
});