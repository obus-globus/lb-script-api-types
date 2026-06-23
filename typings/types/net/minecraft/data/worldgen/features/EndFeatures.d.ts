import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BootstrapContext } from '../../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ConfiguredFeature } from '../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
export class EndFeatures extends Object {
    static CHORUS_PLANT: ResourceKey<ConfiguredFeature<any, any>>;
    static END_GATEWAY_DELAYED: ResourceKey<ConfiguredFeature<any, any>>;
    static END_GATEWAY_RETURN: ResourceKey<ConfiguredFeature<any, any>>;
    static END_ISLAND: ResourceKey<ConfiguredFeature<any, any>>;
    static END_PLATFORM: ResourceKey<ConfiguredFeature<any, any>>;
    static END_SPIKE: ResourceKey<ConfiguredFeature<any, any>>;
    static bootstrap(paramcontext: BootstrapContext<ConfiguredFeature<any, any>>): void;
    constructor()
}