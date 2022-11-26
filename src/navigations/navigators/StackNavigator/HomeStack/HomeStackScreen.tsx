import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';

import {
  hideBottomTab,
  showBottomTab,
} from '@navigations/actions/RootNavigation';
import { STACK_NAVIGATOR } from '@navigations/navigators/ConstantNavigator';

const HomeStack = createStackNavigator();

function HomeScreen() {
  return <View />;
}

function HomeStackScreens() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        cardOverlayEnabled: false,
        headerShown: false,
      }}
    >
      <HomeStack.Screen
        name={STACK_NAVIGATOR.BOTTOM_TAB_SCREENS.HOME_TAB_SCREEN}
        key={STACK_NAVIGATOR.BOTTOM_TAB_SCREENS.HOME_TAB_SCREEN}
        component={HomeScreen}
        listeners={({ navigation: navBottom }) => ({
          focus: () => {
            showBottomTab(navBottom);
          },
        })}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreens;
