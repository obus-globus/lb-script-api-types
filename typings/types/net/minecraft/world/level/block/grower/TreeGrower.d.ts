import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { OptionalInt } from '../../../../../../java/util/OptionalInt.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { LevelAccessor } from '../../../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ChunkGenerator } from '../../../../../../net/minecraft/world/level/chunk/ChunkGenerator.d.ts'
import type { ConfiguredFeature } from '../../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
export class TreeGrower extends Object {
    static ACACIA: TreeGrower;
    static AZALEA: TreeGrower;
    static BIRCH: TreeGrower;
    static CHERRY: TreeGrower;
    static CODEC: Codec<TreeGrower>;
    static DARK_OAK: TreeGrower;
    static JUNGLE: TreeGrower;
    static MANGROVE: TreeGrower;
    static OAK: TreeGrower;
    static PALE_OAK: TreeGrower;
    static SPRUCE: TreeGrower;
    constructor(name: string, megaTree: Optional<ResourceKey<ConfiguredFeature<Object, Object>>>, tree: Optional<ResourceKey<ConfiguredFeature<Object, Object>>>, flowers: Optional<ResourceKey<ConfiguredFeature<Object, Object>>>)
    constructor(name: string, secondaryChance: number, megaTree: Optional<ResourceKey<ConfiguredFeature<Object, Object>>>, secondaryMegaTree: Optional<ResourceKey<ConfiguredFeature<Object, Object>>>, tree: Optional<ResourceKey<ConfiguredFeature<Object, Object>>>, secondaryTree: Optional<ResourceKey<ConfiguredFeature<Object, Object>>>, flowers: Optional<ResourceKey<ConfiguredFeature<Object, Object>>>, secondaryFlowers: Optional<ResourceKey<ConfiguredFeature<Object, Object>>>)
    // private flowers: Optional<ResourceKey<ConfiguredFeature<Object, Object>>>;
    // private megaTree: Optional<ResourceKey<ConfiguredFeature<Object, Object>>>;
    // private name: string;
    // private secondaryChance: number;
    // private secondaryFlowers: Optional<ResourceKey<ConfiguredFeature<Object, Object>>>;
    // private secondaryMegaTree: Optional<ResourceKey<ConfiguredFeature<Object, Object>>>;
    // private secondaryTree: Optional<ResourceKey<ConfiguredFeature<Object, Object>>>;
    // private tree: Optional<ResourceKey<ConfiguredFeature<Object, Object>>>;
    // private getConfiguredFeature(random: RandomSource, hasFlowers: boolean): ResourceKey<ConfiguredFeature<Object, Object>>;
    // private getConfiguredMegaFeature(random: RandomSource): ResourceKey<ConfiguredFeature<Object, Object>>;
    getMinimumHeight(level: ServerLevel): OptionalInt;
    growTree(level: ServerLevel, generator: ChunkGenerator, pos: BlockPos, state: BlockState, random: RandomSource): boolean;
    // private hasFlowers(level: LevelAccessor, pos: BlockPos): boolean;
}