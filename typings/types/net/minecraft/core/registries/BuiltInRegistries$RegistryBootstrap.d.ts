import type { Object } from '../../../../java/lang/Object.d.ts'
export interface BuiltInRegistries$RegistryBootstrap<T extends unknown> extends Object{
    run(registry: T[]): Object;
}