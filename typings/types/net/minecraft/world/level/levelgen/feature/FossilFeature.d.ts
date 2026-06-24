import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { TagKey } from '../../../../../../net/minecraft/tags/TagKey.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { WorldGenLevel } from '../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ChunkGenerator } from '../../../../../../net/minecraft/world/level/chunk/ChunkGenerator.d.ts'
import type { BonusChestFeature } from '../../../../../../net/minecraft/world/level/levelgen/feature/BonusChestFeature.d.ts'
import type { Feature } from '../../../../../../net/minecraft/world/level/levelgen/feature/Feature.d.ts'
import type { FeaturePlaceContext } from '../../../../../../net/minecraft/world/level/levelgen/feature/FeaturePlaceContext.d.ts'
import type { FossilFeatureConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/FossilFeatureConfiguration.d.ts'
import type { HugeFungusConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/HugeFungusConfiguration.d.ts'
import type { LakeFeature$Configuration } from '../../../../../../net/minecraft/world/level/levelgen/feature/LakeFeature$Configuration.d.ts'
import type { SeagrassFeature } from '../../../../../../net/minecraft/world/level/levelgen/feature/SeagrassFeature.d.ts'
import type { BlockBlobConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/BlockBlobConfiguration.d.ts'
import type { BlockColumnConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/BlockColumnConfiguration.d.ts'
import type { BlockPileConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/BlockPileConfiguration.d.ts'
import type { BlockStateConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/BlockStateConfiguration.d.ts'
import type { ColumnFeatureConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/ColumnFeatureConfiguration.d.ts'
import type { CompositeFeatureConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/CompositeFeatureConfiguration.d.ts'
import type { CountConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/CountConfiguration.d.ts'
import type { DeltaFeatureConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/DeltaFeatureConfiguration.d.ts'
import type { DiskConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/DiskConfiguration.d.ts'
import type { EndGatewayConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/EndGatewayConfiguration.d.ts'
import type { EndSpikeConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/EndSpikeConfiguration.d.ts'
import type { FallenTreeConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/FallenTreeConfiguration.d.ts'
import type { GeodeConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/GeodeConfiguration.d.ts'
import type { HugeMushroomFeatureConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/HugeMushroomFeatureConfiguration.d.ts'
import type { LargeDripstoneConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/LargeDripstoneConfiguration.d.ts'
import type { LayerConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/LayerConfiguration.d.ts'
import type { MultifaceGrowthConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/MultifaceGrowthConfiguration.d.ts'
import type { NetherForestVegetationConfig } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/NetherForestVegetationConfig.d.ts'
import type { NoneFeatureConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/NoneFeatureConfiguration.d.ts'
import type { OreConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/OreConfiguration.d.ts'
import type { ProbabilityFeatureConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/ProbabilityFeatureConfiguration.d.ts'
import type { RandomBooleanFeatureConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/RandomBooleanFeatureConfiguration.d.ts'
import type { RandomFeatureConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/RandomFeatureConfiguration.d.ts'
import type { ReplaceBlockConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/ReplaceBlockConfiguration.d.ts'
import type { ReplaceSphereConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/ReplaceSphereConfiguration.d.ts'
import type { RootSystemConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/RootSystemConfiguration.d.ts'
import type { SculkPatchConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/SculkPatchConfiguration.d.ts'
import type { SimpleBlockConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/SimpleBlockConfiguration.d.ts'
import type { SpeleothemClusterConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/SpeleothemClusterConfiguration.d.ts'
import type { SpeleothemConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/SpeleothemConfiguration.d.ts'
import type { SpikeConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/SpikeConfiguration.d.ts'
import type { SpringConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/SpringConfiguration.d.ts'
import type { TemplateFeatureConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/TemplateFeatureConfiguration.d.ts'
import type { TreeConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/TreeConfiguration.d.ts'
import type { TwistingVinesConfig } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/TwistingVinesConfig.d.ts'
import type { UnderwaterMagmaConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/UnderwaterMagmaConfiguration.d.ts'
import type { VegetationPatchConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/VegetationPatchConfiguration.d.ts'
import type { WeightedRandomFeatureConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/WeightedRandomFeatureConfiguration.d.ts'
export class FossilFeature extends Feature<FossilFeatureConfiguration> {
    static BAMBOO: Feature<ProbabilityFeatureConfiguration>;
    static BASALT_COLUMNS: Feature<ColumnFeatureConfiguration>;
    static BASALT_PILLAR: Feature<NoneFeatureConfiguration>;
    static BLOCK_BLOB: Feature<BlockBlobConfiguration>;
    static BLOCK_COLUMN: Feature<BlockColumnConfiguration>;
    static BLOCK_PILE: Feature<BlockPileConfiguration>;
    static BLUE_ICE: Feature<NoneFeatureConfiguration>;
    static BONUS_CHEST: BonusChestFeature;
    static CHORUS_PLANT: Feature<NoneFeatureConfiguration>;
    static CORAL_CLAW: Feature<NoneFeatureConfiguration>;
    static CORAL_MUSHROOM: Feature<NoneFeatureConfiguration>;
    static CORAL_TREE: Feature<NoneFeatureConfiguration>;
    static DELTA_FEATURE: Feature<DeltaFeatureConfiguration>;
    static DESERT_WELL: Feature<NoneFeatureConfiguration>;
    static DISK: Feature<DiskConfiguration>;
    static END_GATEWAY: Feature<EndGatewayConfiguration>;
    static END_ISLAND: Feature<NoneFeatureConfiguration>;
    static END_PLATFORM: Feature<NoneFeatureConfiguration>;
    static END_SPIKE: Feature<EndSpikeConfiguration>;
    static FALLEN_TREE: Feature<FallenTreeConfiguration>;
    static FILL_LAYER: Feature<LayerConfiguration>;
    static FOSSIL: Feature<FossilFeatureConfiguration>;
    static FREEZE_TOP_LAYER: Feature<NoneFeatureConfiguration>;
    static GEODE: Feature<GeodeConfiguration>;
    static GLOWSTONE_BLOB: Feature<NoneFeatureConfiguration>;
    static HUGE_BROWN_MUSHROOM: Feature<HugeMushroomFeatureConfiguration>;
    static HUGE_FUNGUS: Feature<HugeFungusConfiguration>;
    static HUGE_RED_MUSHROOM: Feature<HugeMushroomFeatureConfiguration>;
    static ICEBERG: Feature<BlockStateConfiguration>;
    static KELP: Feature<NoneFeatureConfiguration>;
    static LAKE: Feature<LakeFeature$Configuration>;
    static LARGE_DRIPSTONE: Feature<LargeDripstoneConfiguration>;
    static MONSTER_ROOM: Feature<NoneFeatureConfiguration>;
    static MULTIFACE_GROWTH: Feature<MultifaceGrowthConfiguration>;
    static NETHER_FOREST_VEGETATION: Feature<NetherForestVegetationConfig>;
    static NO_OP: Feature<NoneFeatureConfiguration>;
    static ORE: Feature<OreConfiguration>;
    static RANDOM_BOOLEAN_SELECTOR: Feature<RandomBooleanFeatureConfiguration>;
    static RANDOM_SELECTOR: Feature<RandomFeatureConfiguration>;
    static REPLACE_BLOBS: Feature<ReplaceSphereConfiguration>;
    static REPLACE_SINGLE_BLOCK: Feature<ReplaceBlockConfiguration>;
    static ROOT_SYSTEM: Feature<RootSystemConfiguration>;
    static SCATTERED_ORE: Feature<OreConfiguration>;
    static SCULK_PATCH: Feature<SculkPatchConfiguration>;
    static SEAGRASS: SeagrassFeature;
    static SEA_PICKLE: Feature<CountConfiguration>;
    static SEQUENCE: Feature<CompositeFeatureConfiguration>;
    static SIMPLE_BLOCK: Feature<SimpleBlockConfiguration>;
    static SIMPLE_RANDOM_SELECTOR: Feature<CompositeFeatureConfiguration>;
    static SPELEOTHEM: Feature<SpeleothemConfiguration>;
    static SPELEOTHEM_CLUSTER: Feature<SpeleothemClusterConfiguration>;
    static SPIKE: Feature<SpikeConfiguration>;
    static SPRING: Feature<SpringConfiguration>;
    static TEMPLATE: Feature<TemplateFeatureConfiguration>;
    static TREE: Feature<TreeConfiguration>;
    static TWISTING_VINES: Feature<TwistingVinesConfig>;
    static UNDERWATER_MAGMA: Feature<UnderwaterMagmaConfiguration>;
    static VEGETATION_PATCH: Feature<VegetationPatchConfiguration>;
    static VINES: Feature<NoneFeatureConfiguration>;
    static VOID_START_PLATFORM: Feature<NoneFeatureConfiguration>;
    static WATERLOGGED_VEGETATION_PATCH: Feature<VegetationPatchConfiguration>;
    static WEEPING_VINES: Feature<NoneFeatureConfiguration>;
    static WEIGHTED_RANDOM_SELECTOR: Feature<WeightedRandomFeatureConfiguration>;
    static checkNeighbors(paramblockGetter: (param0: BlockPos) => BlockState, parampos: BlockPos, parampredicate: (param0: BlockState) => boolean): boolean;
    static isAdjacentToAir(paramblockGetter: (param0: BlockPos) => BlockState, parampos: BlockPos): boolean;
    static isReplaceable(paramcannotReplaceTag: TagKey<Block>): (param0: BlockState) => boolean;
    constructor(codec: Codec<FossilFeatureConfiguration>)
    place(context: FeaturePlaceContext<FossilFeatureConfiguration>): boolean;
    place(config: FossilFeatureConfiguration, level: WorldGenLevel, chunkGenerator: ChunkGenerator, random: RandomSource, origin: BlockPos): boolean;
}