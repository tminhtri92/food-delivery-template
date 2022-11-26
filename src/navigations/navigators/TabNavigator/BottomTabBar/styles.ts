import { StyleSheet } from 'react-native';

import { COLORS, TYPOGRAPHY } from '@styles';
import { perWidth, resWidth } from '@utils/Screen';

export default StyleSheet.create({
  rectangleTopTab: {
    width: perWidth(20),
    height: resWidth(2),
    backgroundColor: COLORS.brandYellow,
  },
  rectangleTopTabWhite: {
    width: perWidth(20),
    height: resWidth(2),
    backgroundColor: COLORS.lightWhite,
  },
  hitSlop: {
    top: resWidth(15),
    bottom: resWidth(15),
    left: resWidth(15),
    right: resWidth(15),
  },
  blockRoutes: {
    position: 'relative',
    flexDirection: 'row',
    backgroundColor: COLORS.lightWhite,
    shadowColor: COLORS.grey1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    shadowOpacity: 0.5,
  },
  containerIconWrapper: {
    alignContent: 'center',
    alignItems: 'center',
  },
  bottomMenuContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cartBadge: {
    position: 'absolute',
    top: '20%',
    right: '25%',
    backgroundColor: 'red',
    width: 15,
    height: 15,
    zIndex: 1,
    borderRadius: 99999,
  },
  tabText: {
    ...TYPOGRAPHY.caption1,
    color: COLORS.textSecondary,
    fontWeight: '400',
  },
  tabTextActive: {
    ...TYPOGRAPHY.caption1,
    color: COLORS.brandYellow,
    fontWeight: '600',
  },
});
