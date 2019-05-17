import React from "react";
import { createDrawerNavigator, createAppContainer,createStackNavigator } from "react-navigation";
import BottomTabNavigator from "./bottom-tab-navigator";
import { SettingsNavigator ,NewVisionNavigator,PaymentsOptionNavigator} from "./screen-stack-navigators";
import drawerContentComponents from './drawerContentComponents';

 
const DrawerNavigator = createDrawerNavigator({
  Home: BottomTabNavigator,
  Settings: SettingsNavigator,
  NewVision: NewVisionNavigator,
  PaymentsOption:PaymentsOptionNavigator
},
{
  contentComponent: drawerContentComponents
}
);
/*
const AppNavigator = createStackNavigator(
  {
   Home: HomeScreen,
   NewVision: NewVisionScreen,
   Drawer : BottomTabNavigator
 },
 {
   initialRouteName: "Home"
 
});*/
//const AppContainer = createAppContainer(AppNavigator);
//export default AppContainer
const Drawer = createAppContainer(DrawerNavigator);

export default Drawer;
