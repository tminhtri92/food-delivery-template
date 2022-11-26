import React from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';

import { NAVIGATOR_CONFIG, STACK_NAVIGATOR } from '@navigations/navigators/ConstantNavigator';

import { BottomTabBar } from './BottomTabBar';

const BottomTab = createBottomTabNavigator();

function HomeStackScreens() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function QueueStackScreens() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function OrderStackScreens() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function CouponStackScreens() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

export default function TabNavigator(): React.ReactElement {
  function customTabBar(props: BottomTabBarProps) {
    return <BottomTabBar {...props} />;
  }
  return (
    <BottomTab.Navigator screenOptions={NAVIGATOR_CONFIG.SCREEN_OPTIONS} tabBar={customTabBar}>
      <BottomTab.Screen
        name={STACK_NAVIGATOR.BOTTOM_TAB_SCREENS.HOME_TAB_SCREEN}
        key={STACK_NAVIGATOR.BOTTOM_TAB_SCREENS.HOME_TAB_SCREEN}
        component={HomeStackScreens}
      />
      <BottomTab.Screen
        name={STACK_NAVIGATOR.BOTTOM_TAB_SCREENS.FAVORITE_TAB_SCREEN}
        key={STACK_NAVIGATOR.BOTTOM_TAB_SCREENS.FAVORITE_TAB_SCREEN}
        component={QueueStackScreens}
      />
      <BottomTab.Screen
        name={STACK_NAVIGATOR.BOTTOM_TAB_SCREENS.MEMBER_TAB_SCREEN}
        key={STACK_NAVIGATOR.BOTTOM_TAB_SCREENS.MEMBER_TAB_SCREEN}
        component={OrderStackScreens}
      />
      <BottomTab.Screen
        name={STACK_NAVIGATOR.BOTTOM_TAB_SCREENS.HISTORY_TAB_SCREEN}
        key={STACK_NAVIGATOR.BOTTOM_TAB_SCREENS.HISTORY_TAB_SCREEN}
        component={CouponStackScreens}
      />
    </BottomTab.Navigator>
  );
}
