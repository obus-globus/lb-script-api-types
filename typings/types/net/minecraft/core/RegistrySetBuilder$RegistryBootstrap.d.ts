import type { Object } from '../../../java/lang/Object.d.ts'
import type { BootstrapContext } from '../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
export interface RegistrySetBuilder$RegistryBootstrap<T extends unknown> extends Object{
    run(registry: BootstrapContext<T>): void;
}