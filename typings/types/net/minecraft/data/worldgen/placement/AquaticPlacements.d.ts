import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BootstrapContext } from '../../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { PlacedFeature } from '../../../../../net/minecraft/world/level/levelgen/placement/PlacedFeature.d.ts'
export class AquaticPlacements extends Object {
    static KELP_COLD: ResourceKey<PlacedFeature>;
    static KELP_WARM: ResourceKey<PlacedFeature>;
    static SEAGRASS_COLD: ResourceKey<PlacedFeature>;
    static SEAGRASS_DEEP: ResourceKey<PlacedFeature>;
    static SEAGRASS_DEEP_COLD: ResourceKey<PlacedFeature>;
    static SEAGRASS_DEEP_WARM: ResourceKey<PlacedFeature>;
    static SEAGRASS_NORMAL: ResourceKey<PlacedFeature>;
    static SEAGRASS_RIVER: ResourceKey<PlacedFeature>;
    static SEAGRASS_SWAMP: ResourceKey<PlacedFeature>;
    static SEAGRASS_WARM: ResourceKey<PlacedFeature>;
    static SEA_PICKLE: ResourceKey<PlacedFeature>;
    static WARM_OCEAN_VEGETATION: ResourceKey<PlacedFeature>;
    static bootstrap(paramcontext: BootstrapContext<PlacedFeature>): void;
    constructor()
}