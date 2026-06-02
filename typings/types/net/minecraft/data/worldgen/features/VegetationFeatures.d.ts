import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BootstrapContext } from '../../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { WeightedList$Builder } from '../../../../../net/minecraft/util/random/WeightedList$Builder.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { BlockPredicateFilter } from '../../../../../net/minecraft/world/level/levelgen/placement/BlockPredicateFilter.d.ts'
export class VegetationFeatures extends Object {
    static BAMBOO_NO_PODZOL: ResourceKey<Object>;
    static BAMBOO_SOME_PODZOL: ResourceKey<Object>;
    static BAMBOO_VEGETATION: ResourceKey<Object>;
    static BERRY_BUSH: ResourceKey<Object>;
    static BIRCH_TALL: ResourceKey<Object>;
    static BROWN_MUSHROOM: ResourceKey<Object>;
    static BUSH: ResourceKey<Object>;
    static CACTUS: ResourceKey<Object>;
    static DARK_FOREST_VEGETATION: ResourceKey<Object>;
    static DEAD_BUSH: ResourceKey<Object>;
    static DRY_GRASS: ResourceKey<Object>;
    static FIREFLY_BUSH: ResourceKey<Object>;
    static FLOWER_CHERRY: ResourceKey<Object>;
    static FLOWER_DEFAULT: ResourceKey<Object>;
    static FLOWER_FLOWER_FOREST: ResourceKey<Object>;
    static FLOWER_MEADOW: ResourceKey<Object>;
    static FLOWER_PALE_GARDEN: ResourceKey<Object>;
    static FLOWER_PLAIN: ResourceKey<Object>;
    static FLOWER_SWAMP: ResourceKey<Object>;
    static FOREST_FLOWERS: ResourceKey<Object>;
    static GRASS: ResourceKey<Object>;
    static GRASS_JUNGLE: ResourceKey<Object>;
    static LARGE_FERN: ResourceKey<Object>;
    static LEAF_LITTER: ResourceKey<Object>;
    static MANGROVE_VEGETATION: ResourceKey<Object>;
    static MEADOW_TREES: ResourceKey<Object>;
    static MELON: ResourceKey<Object>;
    static MUSHROOM_ISLAND_VEGETATION: ResourceKey<Object>;
    static PALE_FOREST_FLOWER: ResourceKey<Object>;
    static PALE_GARDEN_VEGETATION: ResourceKey<Object>;
    static PALE_MOSS_PATCH: ResourceKey<Object>;
    static PALE_MOSS_PATCH_BONEMEAL: ResourceKey<Object>;
    static PALE_MOSS_VEGETATION: ResourceKey<Object>;
    static PUMPKIN: ResourceKey<Object>;
    static RED_MUSHROOM: ResourceKey<Object>;
    static SUGAR_CANE: ResourceKey<Object>;
    static SUNFLOWER: ResourceKey<Object>;
    static TAIGA_GRASS: ResourceKey<Object>;
    static TALL_GRASS: ResourceKey<Object>;
    static TREES_BADLANDS: ResourceKey<Object>;
    static TREES_BIRCH: ResourceKey<Object>;
    static TREES_BIRCH_AND_OAK_LEAF_LITTER: ResourceKey<Object>;
    static TREES_FLOWER_FOREST: ResourceKey<Object>;
    static TREES_GROVE: ResourceKey<Object>;
    static TREES_JUNGLE: ResourceKey<Object>;
    static TREES_OLD_GROWTH_PINE_TAIGA: ResourceKey<Object>;
    static TREES_OLD_GROWTH_SPRUCE_TAIGA: ResourceKey<Object>;
    static TREES_PLAINS: ResourceKey<Object>;
    static TREES_SAVANNA: ResourceKey<Object>;
    static TREES_SNOWY: ResourceKey<Object>;
    static TREES_SPARSE_JUNGLE: ResourceKey<Object>;
    static TREES_TAIGA: ResourceKey<Object>;
    static TREES_WATER: ResourceKey<Object>;
    static TREES_WINDSWEPT_HILLS: ResourceKey<Object>;
    static VINES: ResourceKey<Object>;
    static WATERLILY: ResourceKey<Object>;
    static WILDFLOWER: ResourceKey<Object>;
    static bootstrap(paramcontext: BootstrapContext<Object>): void;
    static leafLitterPatchBuilder(paramminState: number, parammaxState: number): WeightedList$Builder<BlockState>;
    static nearWaterPredicate(paramblock: Block): BlockPredicateFilter;
    constructor()
}