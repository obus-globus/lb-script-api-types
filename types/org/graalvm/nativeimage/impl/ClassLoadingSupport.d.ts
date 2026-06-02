import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ClassLoadingSupport extends Object{
    endIgnoreReflectionConfigurationScope(): void;
    followReflectionConfiguration(): boolean;
    isSupported(): boolean;
    startIgnoreReflectionConfigurationScope(): void;
}