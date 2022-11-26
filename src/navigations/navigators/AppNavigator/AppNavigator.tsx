import React from 'react';

import {
  hideBottomTab,
  showBottomTab,
} from '@navigations/actions/RootNavigation';

import { STACK_NAVIGATOR } from '../ConstantNavigator';
import { AppStack } from '../RootNavigator';
import { TabNavigator } from '../TabNavigator';

function AppNavigator() {
  return (
    <AppStack.Screen
      component={TabNavigator}
      key={STACK_NAVIGATOR.NAVIGATORS.BOTTOM_TAB_NAVIGATOR}
      name={STACK_NAVIGATOR.NAVIGATORS.BOTTOM_TAB_NAVIGATOR}
    />
  );
}

export default AppNavigator;
