import type { Object } from '../../../../java/lang/Object.d.ts'
export interface BuiltInRegistries$RegistryBootstrap<T extends Object | number | string | boolean> extends Object{
    run(registry: T[]): Object;
}