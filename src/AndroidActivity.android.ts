import AndroidActivity from './NativeAndroidActivity';

export function startActivity(
  className: string,
  packageName?: string
): Promise<boolean> {
  return AndroidActivity.startActivity(className, packageName);
}

export function finishCurrentActivity(): void {
  AndroidActivity.finishCurrentActivity();
}
