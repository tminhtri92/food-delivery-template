import Platform from './Platform';

/* eslint-disable no-console */
class Logger {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static log(...params: any[]): void {
    if (Platform.isDev) {
      console.log(...params);
    }
  }

  static warn(...params: string[]): void {
    if (Platform.isDev) {
      console.warn(...params);
    }
  }

  static error(...params: Error[]): void {
    if (Platform.isDev) {
      console.error(...params);
    }
  }
}

export { Logger };
