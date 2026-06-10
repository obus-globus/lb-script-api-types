import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BootstrapContext } from '../../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ConfiguredFeature } from '../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
export class MiscOverworldFeatures extends Object {
    static BLUE_ICE: ResourceKey<ConfiguredFeature<Object, Object>>;
    static BONUS_CHEST: ResourceKey<ConfiguredFeature<Object, Object>>;
    static DESERT_WELL: ResourceKey<ConfiguredFeature<Object, Object>>;
    static DISK_CLAY: ResourceKey<ConfiguredFeature<Object, Object>>;
    static DISK_GRASS: ResourceKey<ConfiguredFeature<Object, Object>>;
    static DISK_GRAVEL: ResourceKey<ConfiguredFeature<Object, Object>>;
    static DISK_SAND: ResourceKey<ConfiguredFeature<Object, Object>>;
    static FOREST_ROCK: ResourceKey<ConfiguredFeature<Object, Object>>;
    static FREEZE_TOP_LAYER: ResourceKey<ConfiguredFeature<Object, Object>>;
    static ICEBERG_BLUE: ResourceKey<ConfiguredFeature<Object, Object>>;
    static ICEBERG_PACKED: ResourceKey<ConfiguredFeature<Object, Object>>;
    static ICE_PATCH: ResourceKey<ConfiguredFeature<Object, Object>>;
    static ICE_SPIKE: ResourceKey<ConfiguredFeature<Object, Object>>;
    static LAKE_LAVA: ResourceKey<ConfiguredFeature<Object, Object>>;
    static SPRING_LAVA_FROZEN: ResourceKey<ConfiguredFeature<Object, Object>>;
    static SPRING_LAVA_OVERWORLD: ResourceKey<ConfiguredFeature<Object, Object>>;
    static SPRING_WATER: ResourceKey<ConfiguredFeature<Object, Object>>;
    static VOID_START_PLATFORM: ResourceKey<ConfiguredFeature<Object, Object>>;
    static bootstrap(paramcontext: BootstrapContext<ConfiguredFeature<Object, Object>>): void;
    constructor()
}