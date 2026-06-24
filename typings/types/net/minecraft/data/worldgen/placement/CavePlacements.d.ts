import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BootstrapContext } from '../../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { PlacedFeature } from '../../../../../net/minecraft/world/level/levelgen/placement/PlacedFeature.d.ts'
export class CavePlacements extends Object {
    static AMETHYST_GEODE: ResourceKey<PlacedFeature>;
    static CAVE_VINES: ResourceKey<PlacedFeature>;
    static CLASSIC_VINES: ResourceKey<PlacedFeature>;
    static DRIPSTONE_CLUSTER: ResourceKey<PlacedFeature>;
    static FOSSIL_LOWER: ResourceKey<PlacedFeature>;
    static FOSSIL_UPPER: ResourceKey<PlacedFeature>;
    static GLOW_LICHEN: ResourceKey<PlacedFeature>;
    static LARGE_DRIPSTONE: ResourceKey<PlacedFeature>;
    static LUSH_CAVES_CEILING_VEGETATION: ResourceKey<PlacedFeature>;
    static LUSH_CAVES_CLAY: ResourceKey<PlacedFeature>;
    static LUSH_CAVES_VEGETATION: ResourceKey<PlacedFeature>;
    static MONSTER_ROOM: ResourceKey<PlacedFeature>;
    static MONSTER_ROOM_DEEP: ResourceKey<PlacedFeature>;
    static POINTED_DRIPSTONE: ResourceKey<PlacedFeature>;
    static ROOTED_AZALEA_TREE: ResourceKey<PlacedFeature>;
    static ROOTED_SULFUR_SPRING: ResourceKey<PlacedFeature>;
    static SCULK_PATCH_ANCIENT_CITY: ResourceKey<PlacedFeature>;
    static SCULK_PATCH_DEEP_DARK: ResourceKey<PlacedFeature>;
    static SCULK_VEIN: ResourceKey<PlacedFeature>;
    static SPORE_BLOSSOM: ResourceKey<PlacedFeature>;
    static SULFUR_SPIKE: ResourceKey<PlacedFeature>;
    static SULFUR_SPIKE_CLUSTER: ResourceKey<PlacedFeature>;
    static UNDERWATER_MAGMA: ResourceKey<PlacedFeature>;
    static bootstrap(paramcontext: BootstrapContext<PlacedFeature>): void;
    constructor()
}