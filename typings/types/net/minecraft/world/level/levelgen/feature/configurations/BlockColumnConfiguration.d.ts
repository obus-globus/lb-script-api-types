import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Direction } from '../../../../../../../net/minecraft/core/Direction.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { IntProvider } from '../../../../../../../net/minecraft/util/valueproviders/IntProvider.d.ts'
import type { BlockPredicate } from '../../../../../../../net/minecraft/world/level/levelgen/blockpredicates/BlockPredicate.d.ts'
import type { ConfiguredFeature } from '../../../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
import type { BlockColumnConfiguration$Layer } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/BlockColumnConfiguration$Layer.d.ts'
import type { FeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/FeatureConfiguration.d.ts'
import type { NoneFeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/NoneFeatureConfiguration.d.ts'
import type { BlockStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/BlockStateProvider.d.ts'
export class BlockColumnConfiguration extends Record implements FeatureConfiguration {
    static CODEC: Codec<BlockColumnConfiguration>;
    static NONE: NoneFeatureConfiguration;
    static layer(paramheight: IntProvider, paramstate: BlockStateProvider): BlockColumnConfiguration$Layer;
    static simple(paramheight: IntProvider, paramstate: BlockStateProvider): BlockColumnConfiguration;
    constructor(layers: BlockColumnConfiguration$Layer[], direction: Direction, allowedPlacement: BlockPredicate, prioritizeTip: boolean)
    // private allowedPlacement: BlockPredicate;
    // private direction: Direction;
    // private layers: BlockColumnConfiguration$Layer[];
    // private prioritizeTip: boolean;
    allowedPlacement(): BlockPredicate;
    direction(): Direction;
    equals(o: Object | null): boolean;
    getSubFeatures(): Stream<Holder<ConfiguredFeature<any, any>>>;
    hashCode(): number;
    layers(): BlockColumnConfiguration$Layer[];
    prioritizeTip(): boolean;
    toString(): string;
}