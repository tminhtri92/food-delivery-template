import { Logger } from './Logger';

/**
 * Get Current Router Name
 * @param previousRouteName
 * @param currentRouteName
 */
export const screenTracking = (
  previousRouteName: string | undefined,
  currentRouteName: string,
): void => {
  Logger.log('currentRouteName', currentRouteName);
  if (previousRouteName !== currentRouteName) {
    // track something
  }
};
