import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BootstrapContext } from '../../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { WeightedList$Builder } from '../../../../../net/minecraft/util/random/WeightedList$Builder.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ConfiguredFeature } from '../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
import type { BlockPredicateFilter } from '../../../../../net/minecraft/world/level/levelgen/placement/BlockPredicateFilter.d.ts'
export class VegetationFeatures extends Object {
    static BAMBOO_NO_PODZOL: ResourceKey<ConfiguredFeature<any, any>>;
    static BAMBOO_SOME_PODZOL: ResourceKey<ConfiguredFeature<any, any>>;
    static BAMBOO_VEGETATION: ResourceKey<ConfiguredFeature<any, any>>;
    static BERRY_BUSH: ResourceKey<ConfiguredFeature<any, any>>;
    static BIRCH_TALL: ResourceKey<ConfiguredFeature<any, any>>;
    static BROWN_MUSHROOM: ResourceKey<ConfiguredFeature<any, any>>;
    static BUSH: ResourceKey<ConfiguredFeature<any, any>>;
    static CACTUS: ResourceKey<ConfiguredFeature<any, any>>;
    static DARK_FOREST_VEGETATION: ResourceKey<ConfiguredFeature<any, any>>;
    static DEAD_BUSH: ResourceKey<ConfiguredFeature<any, any>>;
    static DRY_GRASS: ResourceKey<ConfiguredFeature<any, any>>;
    static FIREFLY_BUSH: ResourceKey<ConfiguredFeature<any, any>>;
    static FLOWER_CHERRY: ResourceKey<ConfiguredFeature<any, any>>;
    static FLOWER_DEFAULT: ResourceKey<ConfiguredFeature<any, any>>;
    static FLOWER_FLOWER_FOREST: ResourceKey<ConfiguredFeature<any, any>>;
    static FLOWER_MEADOW: ResourceKey<ConfiguredFeature<any, any>>;
    static FLOWER_PALE_GARDEN: ResourceKey<ConfiguredFeature<any, any>>;
    static FLOWER_PLAIN: ResourceKey<ConfiguredFeature<any, any>>;
    static FLOWER_SWAMP: ResourceKey<ConfiguredFeature<any, any>>;
    static FOREST_FLOWERS: ResourceKey<ConfiguredFeature<any, any>>;
    static GRASS: ResourceKey<ConfiguredFeature<any, any>>;
    static GRASS_JUNGLE: ResourceKey<ConfiguredFeature<any, any>>;
    static LARGE_FERN: ResourceKey<ConfiguredFeature<any, any>>;
    static LEAF_LITTER: ResourceKey<ConfiguredFeature<any, any>>;
    static MANGROVE_VEGETATION: ResourceKey<ConfiguredFeature<any, any>>;
    static MEADOW_TREES: ResourceKey<ConfiguredFeature<any, any>>;
    static MELON: ResourceKey<ConfiguredFeature<any, any>>;
    static MUSHROOM_ISLAND_VEGETATION: ResourceKey<ConfiguredFeature<any, any>>;
    static PALE_FOREST_FLOWER: ResourceKey<ConfiguredFeature<any, any>>;
    static PALE_GARDEN_VEGETATION: ResourceKey<ConfiguredFeature<any, any>>;
    static PALE_MOSS_PATCH: ResourceKey<ConfiguredFeature<any, any>>;
    static PALE_MOSS_PATCH_BONEMEAL: ResourceKey<ConfiguredFeature<any, any>>;
    static PALE_MOSS_VEGETATION: ResourceKey<ConfiguredFeature<any, any>>;
    static PUMPKIN: ResourceKey<ConfiguredFeature<any, any>>;
    static RED_MUSHROOM: ResourceKey<ConfiguredFeature<any, any>>;
    static SUGAR_CANE: ResourceKey<ConfiguredFeature<any, any>>;
    static SUNFLOWER: ResourceKey<ConfiguredFeature<any, any>>;
    static TAIGA_GRASS: ResourceKey<ConfiguredFeature<any, any>>;
    static TALL_GRASS: ResourceKey<ConfiguredFeature<any, any>>;
    static TREES_BADLANDS: ResourceKey<ConfiguredFeature<any, any>>;
    static TREES_BIRCH: ResourceKey<ConfiguredFeature<any, any>>;
    static TREES_BIRCH_AND_OAK_LEAF_LITTER: ResourceKey<ConfiguredFeature<any, any>>;
    static TREES_FLOWER_FOREST: ResourceKey<ConfiguredFeature<any, any>>;
    static TREES_GROVE: ResourceKey<ConfiguredFeature<any, any>>;
    static TREES_JUNGLE: ResourceKey<ConfiguredFeature<any, any>>;
    static TREES_OLD_GROWTH_PINE_TAIGA: ResourceKey<ConfiguredFeature<any, any>>;
    static TREES_OLD_GROWTH_SPRUCE_TAIGA: ResourceKey<ConfiguredFeature<any, any>>;
    static TREES_PLAINS: ResourceKey<ConfiguredFeature<any, any>>;
    static TREES_SAVANNA: ResourceKey<ConfiguredFeature<any, any>>;
    static TREES_SNOWY: ResourceKey<ConfiguredFeature<any, any>>;
    static TREES_SPARSE_JUNGLE: ResourceKey<ConfiguredFeature<any, any>>;
    static TREES_TAIGA: ResourceKey<ConfiguredFeature<any, any>>;
    static TREES_WATER: ResourceKey<ConfiguredFeature<any, any>>;
    static TREES_WINDSWEPT_HILLS: ResourceKey<ConfiguredFeature<any, any>>;
    static VINES: ResourceKey<ConfiguredFeature<any, any>>;
    static WATERLILY: ResourceKey<ConfiguredFeature<any, any>>;
    static WILDFLOWER: ResourceKey<ConfiguredFeature<any, any>>;
    static bootstrap(paramcontext: BootstrapContext<ConfiguredFeature<any, any>>): void;
    static leafLitterPatchBuilder(paramminState: number, parammaxState: number): WeightedList$Builder<BlockState>;
    static nearWaterPredicate(paramblock: Block): BlockPredicateFilter;
    constructor()
}