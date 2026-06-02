import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { BlockPredicate } from '../../../../../../net/minecraft/world/level/levelgen/blockpredicates/BlockPredicate.d.ts'
import type { ConfiguredFeature } from '../../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
import type { FeatureConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/FeatureConfiguration.d.ts'
import type { NoneFeatureConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/NoneFeatureConfiguration.d.ts'
export class HugeFungusConfiguration extends Object implements FeatureConfiguration {
    static CODEC: Codec<HugeFungusConfiguration>;
    static NONE: NoneFeatureConfiguration;
    constructor(validBaseState: BlockState, stemState: BlockState, hatState: BlockState, decorState: BlockState, replaceableBlocks: BlockPredicate, planted: boolean)
    decorState: BlockState;
    hatState: BlockState;
    planted: boolean;
    replaceableBlocks: BlockPredicate;
    stemState: BlockState;
    validBaseState: BlockState;
    getSubFeatures(): Stream<Holder<ConfiguredFeature<Object, Object>>>;
}