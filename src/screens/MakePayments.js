import { View, Text, StyleSheet,Keyboard,TextInput , TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from "react-native";
import { Button, Card, Divider } from 'react-native-elements';
import React, { Component } from "react";
import { MenuButton, Logo } from "../components/header/header";

export default class MakePayments extends React.Component{

    static navigationOptions = ({ navigation }) => {
        return {
          headerLeft: <MenuButton onPress={() => navigation.openDrawer()} />,
          headerTitle: <Logo />,
          headerBackTitle: "Profile",
          
          headerLayoutPreset: "center"
        };
      };
      render() {
        return (
          <KeyboardAvoidingView style={styles.containerView} behavior="padding">

          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.paymentScreenContainer}>
              <View style={styles.paymentFormView}>
              
                <TextInput keyboardType={'phone-pad'}  placeholder="Mobile Money Number.." placeholderColor="#c4c3cb" style={styles.paymentFormTextInput} />
                <Button
                  buttonStyle={styles.paymentButton}
                  type="outline" onPress={() => this.props.navigation.navigate('PdfRead')}
                  title="Proceed to payments"
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
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
        backgroundColor: '#f0f0f0',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 5,
      },
    
      inputContainer: {
        paddingTop: 15
      },
      paymentButton: {
        borderRadius: 5,
        height: 45,
        marginTop: 10,
        paddingLeft: 10,
        marginLeft: 15,
        marginRight: 15,
      },
      containerView: {
        flex: 1,
      },
      paymentScreenContainer: {
        flex: 1,
      },

      paymentFormView: {
        flex: 1
      },
      paymentFormTextInput: {
        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#eaeaea',
        backgroundColor: '#fafafa',
        paddingLeft: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 100,
        marginBottom: 5,
      
      },
    });
    