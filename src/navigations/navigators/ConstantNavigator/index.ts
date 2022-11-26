/**
 * Navigator
 */
const NAVIGATORS = {
  MAIN_NAVIGATOR: 'MAIN_NAVIGATOR',
  BOTTOM_TAB_NAVIGATOR: 'BOTTOM_TAB_NAVIGATOR',
  AUTH_NAVIGATOR: 'AUTH_NAVIGATOR',
  ACCOUNT_NAVIGATOR: 'ACCOUNT_NAVIGATOR',
  SETTING_NAVIGATOR: 'SETTING_NAVIGATOR',
  CONTENT_NAVIGATOR: 'CONTENT_NAVIGATOR',
  CAMERA_NAVIGATION: 'CAMERA_NAVIGATION',
  ORDER_NAVIGATION: 'ORDER_NAVIGATION',
  QUEUE_NAVIGATION: 'QUEUE_NAVIGATION',
  COUPON_NAVIGATION: 'COUPON_NAVIGATION',
  NOTIFICATION_NAVIGATION: 'NOTIFICATION_NAVIGATION',
};

/**
 * Auth stack screens
 */
const AUTH_SCREENS = {
  LOGIN_VALIDATE: 'LOGIN_VALIDATE',
  LOGIN_SCREEN: 'LOGIN_SCREEN',
  FORGOT_PASS_SCREEN: 'FORGOT_PASS_SCREEN',
  FORGOT_PASS_CONFIRM_SCREEN: 'FORGOT_PASS_CONFIRM_SCREEN',
  RECEIVE_CODE_SCREEN: 'RECEIVE_CODE_SCREEN',
  CHANGE_PASS: 'CHANGE_PASS',
  SIGN_UP: 'SIGN_UP',
  SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
  SIGN_UP_VALIDATE: 'SIGN_UP_VALIDATE',
  SIGN_UP_VERIFIED: 'SIGN_UP_VERIFIED',
  VERIFY_CODE: 'VERIFY_CODE',
  VERIFY_SUCCESS: 'VERIFY_SUCCESS',
};

/**
 * Order stack screens
 */
const ORDER_SCREENS = {
  ORDER_SCREEN: 'ORDER_SCREEN',
  ORDER_WEBVIEW: 'ORDER_WEBVIEW',
};

/**
 * Order stack screens
 */
const BOTTOM_TAB_SCREENS = {
  HOME_TAB_SCREEN: 'HOME_TAB_SCREEN',
  FAVORITE_TAB_SCREEN: 'FAVORITE_TAB_SCREEN',
  MEMBER_TAB_SCREEN: 'MEMBER_TAB_SCREEN',
  HISTORY_TAB_SCREEN: 'HISTORY_TAB_SCREEN',
};

/**
 * Core stack
 */
export const STACK_NAVIGATOR = {
  /** NAVIGATORS */
  NAVIGATORS,
  /** AUTH SCREENS */
  AUTH_SCREENS,
  /** ORDER SCREENS */
  ORDER_SCREENS,
  /** ORDER SCREENS */
  BOTTOM_TAB_SCREENS,
};

/**
 * Config Navigator
 */
export const NAVIGATOR_CONFIG = {
  HEADER: {
    NONE: 'none',
    FLOAT: 'float',
    SCREEN: 'screen',
  },
  HEADER_TITLE: {
    NONE: '',
  },
  HEADER_ALIGN: {
    LEFT: {
      headerTitleAlign: 'left',
    },
    CENTER: {
      headerTitleAlign: 'center',
    },
  },
  SWIPE_BACK: {
    FALSE: false,
  },
  FADE_SCREEN: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    cardStyleInterpolator: ({ current }: any) => ({
      cardStyle: {
        opacity: current.progress,
      },
    }),
  },
  SCREEN_OPTIONS: {
    cardOverlayEnabled: false,
    headerShown: false,
  }
};
