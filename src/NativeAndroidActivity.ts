import { TurboModuleRegistry, type TurboModule } from 'react-native';

export interface Spec extends TurboModule {
  startActivity(
    requestCode: number,
    className: string,
    packageName?: string
  ): Promise<boolean>;
  finishActivity(requestCode: number): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('AndroidActivity');
