import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BootstrapContext } from '../../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { WeightedList$Builder } from '../../../../../net/minecraft/util/random/WeightedList$Builder.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ConfiguredFeature } from '../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
import type { BlockPredicateFilter } from '../../../../../net/minecraft/world/level/levelgen/placement/BlockPredicateFilter.d.ts'
export class VegetationFeatures extends Object {
    static BAMBOO_NO_PODZOL: ResourceKey<ConfiguredFeature<Object, Object>>;
    static BAMBOO_SOME_PODZOL: ResourceKey<ConfiguredFeature<Object, Object>>;
    static BAMBOO_VEGETATION: ResourceKey<ConfiguredFeature<Object, Object>>;
    static BERRY_BUSH: ResourceKey<ConfiguredFeature<Object, Object>>;
    static BIRCH_TALL: ResourceKey<ConfiguredFeature<Object, Object>>;
    static BROWN_MUSHROOM: ResourceKey<ConfiguredFeature<Object, Object>>;
    static BUSH: ResourceKey<ConfiguredFeature<Object, Object>>;
    static CACTUS: ResourceKey<ConfiguredFeature<Object, Object>>;
    static DARK_FOREST_VEGETATION: ResourceKey<ConfiguredFeature<Object, Object>>;
    static DEAD_BUSH: ResourceKey<ConfiguredFeature<Object, Object>>;
    static DRY_GRASS: ResourceKey<ConfiguredFeature<Object, Object>>;
    static FIREFLY_BUSH: ResourceKey<ConfiguredFeature<Object, Object>>;
    static FLOWER_CHERRY: ResourceKey<ConfiguredFeature<Object, Object>>;
    static FLOWER_DEFAULT: ResourceKey<ConfiguredFeature<Object, Object>>;
    static FLOWER_FLOWER_FOREST: ResourceKey<ConfiguredFeature<Object, Object>>;
    static FLOWER_MEADOW: ResourceKey<ConfiguredFeature<Object, Object>>;
    static FLOWER_PALE_GARDEN: ResourceKey<ConfiguredFeature<Object, Object>>;
    static FLOWER_PLAIN: ResourceKey<ConfiguredFeature<Object, Object>>;
    static FLOWER_SWAMP: ResourceKey<ConfiguredFeature<Object, Object>>;
    static FOREST_FLOWERS: ResourceKey<ConfiguredFeature<Object, Object>>;
    static GRASS: ResourceKey<ConfiguredFeature<Object, Object>>;
    static GRASS_JUNGLE: ResourceKey<ConfiguredFeature<Object, Object>>;
    static LARGE_FERN: ResourceKey<ConfiguredFeature<Object, Object>>;
    static LEAF_LITTER: ResourceKey<ConfiguredFeature<Object, Object>>;
    static MANGROVE_VEGETATION: ResourceKey<ConfiguredFeature<Object, Object>>;
    static MEADOW_TREES: ResourceKey<ConfiguredFeature<Object, Object>>;
    static MELON: ResourceKey<ConfiguredFeature<Object, Object>>;
    static MUSHROOM_ISLAND_VEGETATION: ResourceKey<ConfiguredFeature<Object, Object>>;
    static PALE_FOREST_FLOWER: ResourceKey<ConfiguredFeature<Object, Object>>;
    static PALE_GARDEN_VEGETATION: ResourceKey<ConfiguredFeature<Object, Object>>;
    static PALE_MOSS_PATCH: ResourceKey<ConfiguredFeature<Object, Object>>;
    static PALE_MOSS_PATCH_BONEMEAL: ResourceKey<ConfiguredFeature<Object, Object>>;
    static PALE_MOSS_VEGETATION: ResourceKey<ConfiguredFeature<Object, Object>>;
    static PUMPKIN: ResourceKey<ConfiguredFeature<Object, Object>>;
    static RED_MUSHROOM: ResourceKey<ConfiguredFeature<Object, Object>>;
    static SUGAR_CANE: ResourceKey<ConfiguredFeature<Object, Object>>;
    static SUNFLOWER: ResourceKey<ConfiguredFeature<Object, Object>>;
    static TAIGA_GRASS: ResourceKey<ConfiguredFeature<Object, Object>>;
    static TALL_GRASS: ResourceKey<ConfiguredFeature<Object, Object>>;
    static TREES_BADLANDS: ResourceKey<ConfiguredFeature<Object, Object>>;
    static TREES_BIRCH: ResourceKey<ConfiguredFeature<Object, Object>>;
    static TREES_BIRCH_AND_OAK_LEAF_LITTER: ResourceKey<ConfiguredFeature<Object, Object>>;
    static TREES_FLOWER_FOREST: ResourceKey<ConfiguredFeature<Object, Object>>;
    static TREES_GROVE: ResourceKey<ConfiguredFeature<Object, Object>>;
    static TREES_JUNGLE: ResourceKey<ConfiguredFeature<Object, Object>>;
    static TREES_OLD_GROWTH_PINE_TAIGA: ResourceKey<ConfiguredFeature<Object, Object>>;
    static TREES_OLD_GROWTH_SPRUCE_TAIGA: ResourceKey<ConfiguredFeature<Object, Object>>;
    static TREES_PLAINS: ResourceKey<ConfiguredFeature<Object, Object>>;
    static TREES_SAVANNA: ResourceKey<ConfiguredFeature<Object, Object>>;
    static TREES_SNOWY: ResourceKey<ConfiguredFeature<Object, Object>>;
    static TREES_SPARSE_JUNGLE: ResourceKey<ConfiguredFeature<Object, Object>>;
    static TREES_TAIGA: ResourceKey<ConfiguredFeature<Object, Object>>;
    static TREES_WATER: ResourceKey<ConfiguredFeature<Object, Object>>;
    static TREES_WINDSWEPT_HILLS: ResourceKey<ConfiguredFeature<Object, Object>>;
    static VINES: ResourceKey<ConfiguredFeature<Object, Object>>;
    static WATERLILY: ResourceKey<ConfiguredFeature<Object, Object>>;
    static WILDFLOWER: ResourceKey<ConfiguredFeature<Object, Object>>;
    static bootstrap(paramcontext: BootstrapContext<ConfiguredFeature<Object, Object>>): void;
    static leafLitterPatchBuilder(paramminState: number, parammaxState: number): WeightedList$Builder<BlockState>;
    static nearWaterPredicate(paramblock: Block): BlockPredicateFilter;
    constructor()
}