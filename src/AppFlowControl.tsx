import React, { useRef } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';

import { navigationRef } from '@navigations/actions/RootNavigation';
import { RootNavigator } from '@navigations/navigators/RootNavigator';
import { screenTracking } from '@utils/ScreenTracking';

function AppControlFlow() {
  const routeNameRef = useRef<string>();
  const onNavigationReady = (): void => {
    const route = navigationRef.current?.getCurrentRoute();
    if (route) {
      routeNameRef.current = route.name;
      // store?.rootStore?.dispatch(setAppReady());
    }
  };

  const changeRouteName = () => {
    const previousRouteName = routeNameRef.current;
    const currentRoute = navigationRef.current?.getCurrentRoute();
    if (currentRoute) {
      const currentRouteName = currentRoute.name;
      screenTracking(previousRouteName, currentRouteName);
      routeNameRef.current = currentRouteName;
    }
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={onNavigationReady}
      onStateChange={changeRouteName}
    >
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <RootNavigator />
        {/* <GlobalModal /> */}
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export { AppControlFlow };
