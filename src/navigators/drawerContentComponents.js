import React, { Component } from 'react';
import {NavigationActions} from 'react-navigation';
import { Text, View, StyleSheet, ImageBackground,Image } from 'react-native'
import { white } from 'ansi-colors';

export default class drawerContentComponents extends Component {
    navigateToScreen = ( route ) =>(
        () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    })

  render() {
    return (
        <View style={styles.maincontainer}>
            <View style={styles.headerContainer}>
                <ImageBackground source={require('../assets/pat.png')} style={{flex: 1, width: 250, justifyContent: 'center'}} >
                        <Image 
                            source={require('../assets/user.png')}  
                            style={{width: 90, height: 90, borderRadius: 400/ 2, alignSelf:"center"}} 
                        />
                    <Text style={styles.headerText}>Allan Musembya</Text>
                </ImageBackground>
            </View>
            <View style={styles.screenContainer}>
                <View style={[styles.screenStyle, (this.props.activeItemKey=='Home') ? styles.activeBackgroundColor : null]}>
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='Home') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Home')}>Home</Text>
                </View>
                <View style={[styles.screenStyle, (this.props.activeItemKey=='Settings') ? styles.activeBackgroundColor : null]}>
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='Settings') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Settings')}>Settings</Text>
                </View>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    maincontainer: {
        alignItems: 'center',
    },
    headerContainer: {
        height: 200,
    },
    headerText: {
        color: '#fff8f8',
        textAlign: 'center',
    },
    screenContainer: { 
        paddingTop: 20,
        width: '100%',
    },
    screenStyle: {
        height: 30,
        marginTop: 2,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    screenTextStyle:{
        fontSize: 20,
        marginLeft: 20, 
        textAlign: 'center'
    },
    selectedTextStyle: {
        fontWeight: 'bold',
        color: '#00adff'
    },
    activeBackgroundColor: {
        backgroundColor: 'grey'
    }
});
