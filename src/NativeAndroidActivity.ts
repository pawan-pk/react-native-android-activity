import { TurboModuleRegistry, type TurboModule } from 'react-native';

export interface Spec extends TurboModule {
  startActivity(className: string, packageName?: string): Promise<boolean>;
  finishCurrentActivity(): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('AndroidActivity');
