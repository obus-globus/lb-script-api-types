import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ConfiguredFeature } from '../../../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
import type { FeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/FeatureConfiguration.d.ts'
import type { NoneFeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/NoneFeatureConfiguration.d.ts'
export class SpeleothemConfiguration extends Record implements FeatureConfiguration {
    static CODEC: Codec<SpeleothemConfiguration>;
    static NONE: NoneFeatureConfiguration;
    constructor(baseBlock: BlockState, pointedBlock: BlockState, replaceableBlocks: Holder<Block>[], chanceOfTallerGeneration: number, chanceOfDirectionalSpread: number, chanceOfSpreadRadius2: number, chanceOfSpreadRadius3: number)
    // private baseBlock: BlockState;
    // private chanceOfDirectionalSpread: number;
    // private chanceOfSpreadRadius2: number;
    // private chanceOfSpreadRadius3: number;
    // private chanceOfTallerGeneration: number;
    // private pointedBlock: BlockState;
    // private replaceableBlocks: Holder<Block>[];
    baseBlock(): BlockState;
    chanceOfDirectionalSpread(): number;
    chanceOfSpreadRadius2(): number;
    chanceOfSpreadRadius3(): number;
    chanceOfTallerGeneration(): number;
    equals(o: Object | null): boolean;
    getSubFeatures(): Stream<Holder<ConfiguredFeature<any, any>>>;
    hashCode(): number;
    pointedBlock(): BlockState;
    replaceableBlocks(): Holder<Block>[];
    toString(): string;
}