import React, { FC, ReactElement } from 'react';

import { StyleSheet } from 'react-native';
import {
  NativeSafeAreaViewProps,
  SafeAreaView,
} from 'react-native-safe-area-context';

import { COLORS } from '@styles';

type IContainerProps = NativeSafeAreaViewProps;

const Container: FC<IContainerProps> = ({
  children,
  style,
  ...rest
}): ReactElement => (
  <SafeAreaView style={[defaultStyles.container, style]} {...rest}>
    {children}
  </SafeAreaView>
);

const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backGround
  },
});

Container.defaultProps = {
  children: <></>,
  style: defaultStyles.container,
};

export default Container;
