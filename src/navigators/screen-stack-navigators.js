import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
import NewVisionScreen from "../screens/NewVisionScreen";
import LoginScreen from "../screens/LoginScreen";
import Payments from "../screens/Payments";
import FeedScreen from "../screens/FeedScreen";
import PaymentOptionScreen from "../screens/PaymentOptionScreen"
import MakePayments from "../screens/MakePayments"
import ReadPdfscreen from "../screens/ReadPdfscreen"
//Add navigators with screens in this file

export const LoginNavigator = createStackNavigator({
  Login: { screen: LoginScreen }
});

export const FeedNavigator = createStackNavigator({
  Feed: { screen: FeedScreen }
});

export const ReadPdfNavigator = createStackNavigator({
  PdfRead: { screen: ReadPdfscreen }
});

export const PaymentsNavigator = createStackNavigator({
  Payment: { screen: Payments }
});
export const PaymentsOptionNavigator = createStackNavigator({
  PaymentOption: { screen: PaymentOptionScreen }
});
export const HomeNavigator = createStackNavigator({
  Home: { screen: HomeScreen }
});
export const SettingsNavigator = createStackNavigator({
  Settings: { screen: SettingsScreen }
});
export const ProfileNavigator = createStackNavigator({
  Profile: { screen: ProfileScreen }
});
export const SearchNavigator = createStackNavigator({
  Search: { screen: SearchScreen }
});
export const MakePaymentsNavigator = createStackNavigator({
  MakePayment: { screen: MakePayments }
});
export const NewVisionNavigator = createStackNavigator({
    NewVision: { screen: NewVisionScreen },
    Home: { screen: HomeScreen },
});

