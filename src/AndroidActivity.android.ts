import AndroidActivity from './NativeAndroidActivity';

export function startActivity(
  requestCode: number,
  className: string,
  packageName?: string
): Promise<boolean> {
  return AndroidActivity.startActivity(requestCode, className, packageName);
}

export function finishActivity(requestCode: number): void {
  AndroidActivity.finishActivity(requestCode);
}
