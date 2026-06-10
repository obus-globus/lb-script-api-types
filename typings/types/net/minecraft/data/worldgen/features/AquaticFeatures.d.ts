import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BootstrapContext } from '../../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ConfiguredFeature } from '../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
export class AquaticFeatures extends Object {
    static KELP: ResourceKey<ConfiguredFeature<Object, Object>>;
    static SEAGRASS_MID: ResourceKey<ConfiguredFeature<Object, Object>>;
    static SEAGRASS_SHORT: ResourceKey<ConfiguredFeature<Object, Object>>;
    static SEAGRASS_SLIGHTLY_LESS_SHORT: ResourceKey<ConfiguredFeature<Object, Object>>;
    static SEAGRASS_TALL: ResourceKey<ConfiguredFeature<Object, Object>>;
    static SEA_PICKLE: ResourceKey<ConfiguredFeature<Object, Object>>;
    static WARM_OCEAN_VEGETATION: ResourceKey<ConfiguredFeature<Object, Object>>;
    static bootstrap(paramcontext: BootstrapContext<ConfiguredFeature<Object, Object>>): void;
    constructor()
}