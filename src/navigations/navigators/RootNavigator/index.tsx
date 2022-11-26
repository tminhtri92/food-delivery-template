import React, { useEffect } from 'react';

import {
  createStackNavigator,
} from '@react-navigation/stack';
import { StatusBar } from 'react-native';

//  Import { useNotification } from 'services/useNotification';

import { Container } from '@components/Container';
import { AppNavigator } from '@navigations/navigators/AppNavigator';
import Platform from '@utils/Platform';

import { NAVIGATOR_CONFIG } from '../ConstantNavigator';

export const AppStack = createStackNavigator();

export function RootNavigator() {
  /*
   * UseNotification();
   * useListenerDynamicLink();
   */
  useEffect(() => {
    StatusBar.setBarStyle('dark-content', true);
    if (Platform.isAndroid) {
      StatusBar.setBackgroundColor('transparent');
      StatusBar.setTranslucent(true);
    }
  }, []);

  return (
    <Container edges={['bottom', 'top']}>
      <AppStack.Navigator screenOptions={NAVIGATOR_CONFIG.SCREEN_OPTIONS}>
        {AppNavigator()}
      </AppStack.Navigator>
    </Container>
  );
}
