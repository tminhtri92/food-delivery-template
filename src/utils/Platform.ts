import { Platform as NativePlatform, Dimensions } from 'react-native';
import Config from 'react-native-config';
import DeviceInfo from 'react-native-device-info';

// const APP_USE_TRANSLUCENT_STATUS_BAR = true;
const PLATFORM = NativePlatform.OS;
const isAndroid = PLATFORM === 'android';
const isIos = PLATFORM === 'ios';
const isEmulator = async (): Promise<boolean> => DeviceInfo.isEmulator();
const dimensions = Dimensions.get('window');
const deviceId = DeviceInfo.getUniqueId();
const androidVersion = isAndroid ? NativePlatform.Version : 0;
const hasNotch = DeviceInfo.hasNotch();
const appVersion = DeviceInfo.getVersion();
const isSupportTranslucentBar = (isIos && !hasNotch) || androidVersion >= 21;
const appBuildNumber = DeviceInfo.getBuildNumber();
const majorVersionIOS = parseInt(String(NativePlatform.Version), 10);
export const isAutoFillSupported = isIos && majorVersionIOS >= 12;
// const isSupportStatusBarContent = APP_USE_TRANSLUCENT_STATUS_BAR && (isIos || androidAPILevel > 22);
// const deviceModel = DeviceInfo.getModel();
const KeyboardEvent = {
  Show: isIos ? 'keyboardWillShow' : 'keyboardDidShow',
  Hide: isIos ? 'keyboardWillHide' : 'keyboardDidHide',
};
// check app version
// const nativeVersion = DeviceInfo.getVersion();
// const jsVersion = semver.valid(semver.coerce(Constants.CODE_BUNDLE_ID));

const isDev = __DEV__;
const isBuildProduction = !__DEV__ && Config.IS_TEST_MODE === 'false';
const isBuildTest = !__DEV__ && Config.IS_TEST_MODE === 'true';

const isIphoneX = () => (
  NativePlatform.OS === 'ios'
        && !NativePlatform.isPad
        && !NativePlatform.isTV
        && (dimensions.height === 780
            || dimensions.width === 780
            || dimensions.height === 812
            || dimensions.width === 812
            || dimensions.height === 844
            || dimensions.width === 844
            || dimensions.height === 896
            || dimensions.width === 896
            || dimensions.height === 926
            || dimensions.width === 926)
);

const ifIphoneX = (ipXStyle: any, regularStyle: any) => (isIphoneX() ? ipXStyle : regularStyle);

const isHasDynamicIsland = () => {
  if (DeviceInfo.hasDynamicIsland()) {
    return true;
  }
  return false;
};

const Platform = {
  isDev,
  isIos,
  isAndroid,
  isEmulator,
  isBuildProduction,
  isBuildTest,
  isSupportTranslucentBar,
  isAutoFillSupported,
  appBuildNumber,
  deviceId,
  KeyboardEvent,
  appVersion,
  dimensions,
  OS: PLATFORM,
  isIphoneX,
  ifIphoneX,
  isHasDynamicIsland,
};

export default Platform;
