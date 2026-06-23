import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BootstrapContext } from '../../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ConfiguredFeature } from '../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
export class AquaticFeatures extends Object {
    static KELP: ResourceKey<ConfiguredFeature<any, any>>;
    static SEAGRASS_MID: ResourceKey<ConfiguredFeature<any, any>>;
    static SEAGRASS_SHORT: ResourceKey<ConfiguredFeature<any, any>>;
    static SEAGRASS_SLIGHTLY_LESS_SHORT: ResourceKey<ConfiguredFeature<any, any>>;
    static SEAGRASS_TALL: ResourceKey<ConfiguredFeature<any, any>>;
    static SEA_PICKLE: ResourceKey<ConfiguredFeature<any, any>>;
    static WARM_OCEAN_VEGETATION: ResourceKey<ConfiguredFeature<any, any>>;
    static bootstrap(paramcontext: BootstrapContext<ConfiguredFeature<any, any>>): void;
    constructor()
}