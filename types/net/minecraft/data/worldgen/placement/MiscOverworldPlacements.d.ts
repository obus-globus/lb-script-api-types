import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BootstrapContext } from '../../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { PlacedFeature } from '../../../../../net/minecraft/world/level/levelgen/placement/PlacedFeature.d.ts'
export class MiscOverworldPlacements extends Object {
    static BLUE_ICE: ResourceKey<PlacedFeature>;
    static DESERT_WELL: ResourceKey<PlacedFeature>;
    static DISK_CLAY: ResourceKey<PlacedFeature>;
    static DISK_GRASS: ResourceKey<PlacedFeature>;
    static DISK_GRAVEL: ResourceKey<PlacedFeature>;
    static DISK_SAND: ResourceKey<PlacedFeature>;
    static FOREST_ROCK: ResourceKey<PlacedFeature>;
    static FREEZE_TOP_LAYER: ResourceKey<PlacedFeature>;
    static ICEBERG_BLUE: ResourceKey<PlacedFeature>;
    static ICEBERG_PACKED: ResourceKey<PlacedFeature>;
    static ICE_PATCH: ResourceKey<PlacedFeature>;
    static ICE_SPIKE: ResourceKey<PlacedFeature>;
    static LAKE_LAVA_SURFACE: ResourceKey<PlacedFeature>;
    static LAKE_LAVA_UNDERGROUND: ResourceKey<PlacedFeature>;
    static SPRING_LAVA: ResourceKey<PlacedFeature>;
    static SPRING_LAVA_FROZEN: ResourceKey<PlacedFeature>;
    static SPRING_WATER: ResourceKey<PlacedFeature>;
    static VOID_START_PLATFORM: ResourceKey<PlacedFeature>;
    static bootstrap(paramcontext: BootstrapContext<PlacedFeature>): void;
    constructor()
}