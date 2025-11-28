import AndroidActivity from './NativeAndroidActivity';

export function multiply(a: number, b: number): number {
  return AndroidActivity.multiply(a, b);
}
