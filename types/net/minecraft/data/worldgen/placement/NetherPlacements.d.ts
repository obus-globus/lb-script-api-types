import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BootstrapContext } from '../../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { PlacedFeature } from '../../../../../net/minecraft/world/level/levelgen/placement/PlacedFeature.d.ts'
export class NetherPlacements extends Object {
    static BASALT_BLOBS: ResourceKey<PlacedFeature>;
    static BASALT_PILLAR: ResourceKey<PlacedFeature>;
    static BLACKSTONE_BLOBS: ResourceKey<PlacedFeature>;
    static CRIMSON_FOREST_VEGETATION: ResourceKey<PlacedFeature>;
    static DELTA: ResourceKey<PlacedFeature>;
    static GLOWSTONE: ResourceKey<PlacedFeature>;
    static GLOWSTONE_EXTRA: ResourceKey<PlacedFeature>;
    static LARGE_BASALT_COLUMNS: ResourceKey<PlacedFeature>;
    static NETHER_SPROUTS: ResourceKey<PlacedFeature>;
    static PATCH_CRIMSON_ROOTS: ResourceKey<PlacedFeature>;
    static PATCH_FIRE: ResourceKey<PlacedFeature>;
    static PATCH_SOUL_FIRE: ResourceKey<PlacedFeature>;
    static SMALL_BASALT_COLUMNS: ResourceKey<PlacedFeature>;
    static SPRING_CLOSED: ResourceKey<PlacedFeature>;
    static SPRING_CLOSED_DOUBLE: ResourceKey<PlacedFeature>;
    static SPRING_DELTA: ResourceKey<PlacedFeature>;
    static SPRING_OPEN: ResourceKey<PlacedFeature>;
    static TWISTING_VINES: ResourceKey<PlacedFeature>;
    static WARPED_FOREST_VEGETATION: ResourceKey<PlacedFeature>;
    static WEEPING_VINES: ResourceKey<PlacedFeature>;
    static bootstrap(paramcontext: BootstrapContext<PlacedFeature>): void;
    constructor()
}