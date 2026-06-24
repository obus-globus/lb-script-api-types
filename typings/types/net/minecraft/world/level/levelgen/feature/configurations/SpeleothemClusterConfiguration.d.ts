import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { FloatProvider } from '../../../../../../../net/minecraft/util/valueproviders/FloatProvider.d.ts'
import type { IntProvider } from '../../../../../../../net/minecraft/util/valueproviders/IntProvider.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ConfiguredFeature } from '../../../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
import type { FeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/FeatureConfiguration.d.ts'
import type { NoneFeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/NoneFeatureConfiguration.d.ts'
export class SpeleothemClusterConfiguration extends Record implements FeatureConfiguration {
    static CODEC: Codec<SpeleothemClusterConfiguration>;
    static NONE: NoneFeatureConfiguration;
    constructor(baseBlock: BlockState, pointedBlock: BlockState, replaceableBlocks: Holder<Block>[], floorToCeilingSearchRange: number, height: IntProvider, radius: IntProvider, maxStalagmiteStalactiteHeightDiff: number, heightDeviation: number, speleothemBlockLayerThickness: IntProvider, density: FloatProvider, wetness: FloatProvider, chanceOfSpeleothemAtMaxDistanceFromCenter: number, maxDistanceFromEdgeAffectingChanceOfSpeleothem: number, maxDistanceFromCenterAffectingHeightBias: number)
    // private baseBlock: BlockState;
    // private chanceOfSpeleothemAtMaxDistanceFromCenter: number;
    // private density: FloatProvider;
    // private floorToCeilingSearchRange: number;
    // private height: IntProvider;
    // private heightDeviation: number;
    // private maxDistanceFromCenterAffectingHeightBias: number;
    // private maxDistanceFromEdgeAffectingChanceOfSpeleothem: number;
    // private maxStalagmiteStalactiteHeightDiff: number;
    // private pointedBlock: BlockState;
    // private radius: IntProvider;
    // private replaceableBlocks: Holder<Block>[];
    // private speleothemBlockLayerThickness: IntProvider;
    // private wetness: FloatProvider;
    baseBlock(): BlockState;
    chanceOfSpeleothemAtMaxDistanceFromCenter(): number;
    density(): FloatProvider;
    equals(o: Object | null): boolean;
    floorToCeilingSearchRange(): number;
    getSubFeatures(): Stream<Holder<ConfiguredFeature<any, any>>>;
    hashCode(): number;
    height(): IntProvider;
    heightDeviation(): number;
    maxDistanceFromCenterAffectingHeightBias(): number;
    maxDistanceFromEdgeAffectingChanceOfSpeleothem(): number;
    maxStalagmiteStalactiteHeightDiff(): number;
    pointedBlock(): BlockState;
    radius(): IntProvider;
    replaceableBlocks(): Holder<Block>[];
    speleothemBlockLayerThickness(): IntProvider;
    toString(): string;
    wetness(): FloatProvider;
}