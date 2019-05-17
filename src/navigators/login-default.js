import { createSwitchNavigator } from 'react-navigation'
import DrawerNavigator from './drawer-navigator'
import {LoginNavigator} from "./screen-stack-navigators";

export const createRootNavigator =  (signedIn = false) => {
  return createSwitchNavigator(
    {
      SignedIn: {
        screen: DrawerNavigator
      },
      SignedOut: {
        screen: LoginNavigator
      }
    },
    {
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};