/* eslint-disable no-console */
class Logger {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static log(...params: any[]): void {
    if (!__DEV__) {
      console.log(...params);
    }
  }

  static warn(...params: string[]): void {
    if (!__DEV__) {
      console.warn(...params);
    }
  }

  static error(...params: Error[]): void {
    if (!__DEV__) {
      console.error(...params);
    }
  }
}

export { Logger };
