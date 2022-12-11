import React from 'react';

import { Text, TouchableOpacity, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { STACK_NAVIGATOR } from '@navigations/navigators/ConstantNavigator';
import { COLORS } from '@styles';
import Platform from '@utils/Platform';
import { resWidth } from '@utils/Screen';

import styles from './styles';
import { IPropsBottomTab } from './type';

const HomeIcon = () => {
  return <Svg width="29" height="26" viewBox="0 0 29 26" fill="none">
    <Path
      d="M17.3688 22.7488H11.2228V15.1419C11.2228 14.5944 11.5903 14.2386 12.1378 14.2386H16.4655C17.013 14.2386 17.3688 14.5944 17.3688 15.1419V22.7488ZM3.78914 22.3431C3.78914 24.0268 4.84734 25.0447 6.58194 25.0447H22.0364C23.771 25.0447 24.8175 24.0268 24.8175 22.3431V13.4141L15.0286 5.20275C14.5727 4.81931 14.0306 4.82892 13.5844 5.20275L3.78914 13.4141V22.3431ZM0 11.814C0 12.4189 0.455153 12.935 1.19765 12.935C1.56163 12.935 1.886 12.7466 2.17217 12.5115L13.8119 2.7458C14.1267 2.46713 14.4958 2.46713 14.8127 2.7458L26.4462 12.5115C26.7248 12.7466 27.0492 12.935 27.4132 12.935C28.0863 12.935 28.6012 12.5171 28.6012 11.8428C28.6012 11.447 28.4482 11.1409 28.1515 10.8878L15.9544 0.635973C14.9522 -0.211991 13.6821 -0.211991 12.6703 0.635973L0.459372 10.8899C0.153045 11.1451 0 11.4875 0 11.814ZM21.547 6.13864L24.8576 8.92464V3.26801C24.8576 2.73973 24.521 2.40317 23.9927 2.40317H22.414C21.8953 2.40317 21.547 2.73973 21.547 3.26801V6.13864Z"
      fill="black" />
  </Svg>

}

const SearchIcon = () => {
  return <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M0 9.53718C0 14.801 4.27757 19.0765 9.53929 19.0765C11.4961 19.0765 13.2919 18.4751 14.7891 17.46L20.1729 22.8534C20.5099 23.1905 20.9564 23.351 21.4263 23.351C22.4236 23.351 23.1368 22.5973 23.1368 21.6117C23.1368 21.1481 22.9666 20.7155 22.6446 20.3935L17.3022 15.0202C18.4207 13.4815 19.0786 11.5898 19.0786 9.53718C19.0786 4.27547 14.801 0 9.53929 0C4.27757 0 0 4.27547 0 9.53718ZM2.48482 9.53718C2.48482 5.64491 5.64702 2.48482 9.53929 2.48482C13.4316 2.48482 16.5916 5.64491 16.5916 9.53718C16.5916 13.4316 13.4316 16.5916 9.53929 16.5916C5.64702 16.5916 2.48482 13.4316 2.48482 9.53718Z"
      fill="black" />
  </Svg>

}

const MemberIcon = () => {
  return <Svg width="18" height="20" viewBox="0 0 18 20" fill="none">
    <Path d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19"
      stroke="#ADADAF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round" />
    <Path d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
      stroke="#ADADAF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round" />
  </Svg>
}

const HistoryIcon = () => {
  return <Svg width="26" height="23" viewBox="0 0 26 23" fill="none">
    <Path d="M14.7084 0.625C11.8241 0.625 9.05805 1.77076 7.01859 3.81021C4.97913 5.84967 3.83337 8.61577 3.83337 11.5H0.208374L4.90879 16.2004L4.99337 16.3696L9.87504 11.5H6.25004C6.25004 6.82375 10.0321 3.04167 14.7084 3.04167C19.3846 3.04167 23.1667 6.82375 23.1667 11.5C23.1667 16.1763 19.3846 19.9583 14.7084 19.9583C12.3763 19.9583 10.2617 19.0038 8.73921 17.4692L7.02337 19.185C8.03042 20.1976 9.22796 21.0008 10.547 21.5483C11.8659 22.0958 13.2803 22.3768 14.7084 22.375C17.5926 22.375 20.3587 21.2292 22.3982 19.1898C24.4376 17.1503 25.5834 14.3842 25.5834 11.5C25.5834 8.61577 24.4376 5.84967 22.3982 3.81021C20.3587 1.77076 17.5926 0.625 14.7084 0.625ZM13.5 6.66667V12.7083L18.6355 15.7533L19.5659 14.1946L15.3125 11.6692V6.66667H13.5Z"
      fill="#ADADAF"
    />
  </Svg>
}

const BottomTabIcons = {
  [`${STACK_NAVIGATOR.BOTTOM_TAB_SCREENS.HOME_TAB_SCREEN}`]: <HomeIcon />,
  [`${STACK_NAVIGATOR.BOTTOM_TAB_SCREENS.FAVORITE_TAB_SCREEN}`]: <SearchIcon />,
  [`${STACK_NAVIGATOR.BOTTOM_TAB_SCREENS.HISTORY_TAB_SCREEN}`]: <HistoryIcon />,
  [`${STACK_NAVIGATOR.BOTTOM_TAB_SCREENS.MEMBER_TAB_SCREEN}`]: <MemberIcon />
}

const BottomTabBar = ({
  state,
  descriptors,
  navigation,
}: IPropsBottomTab): React.ReactElement | null => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  // console.log('state', state)

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const TabIcon = () => BottomTabIcons?.[`${route.name}`] ?? <View />

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={"bottomTab-" + index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            <TabIcon />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
export default BottomTabBar;
