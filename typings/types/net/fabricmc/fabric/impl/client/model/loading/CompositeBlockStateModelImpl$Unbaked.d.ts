import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CompositeBlockStateModel$Unbaked } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/CompositeBlockStateModel$Unbaked.d.ts'
import type { BlockStateModel } from '../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel.d.ts'
import type { BlockStateModel$Unbaked } from '../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel$Unbaked.d.ts'
import type { Variant } from '../../../../../../../net/minecraft/client/renderer/block/dispatch/Variant.d.ts'
import type { WeightedVariants$Unbaked } from '../../../../../../../net/minecraft/client/renderer/block/dispatch/WeightedVariants$Unbaked.d.ts'
import type { ModelBaker } from '../../../../../../../net/minecraft/client/resources/model/ModelBaker.d.ts'
import type { ResolvableModel$Resolver } from '../../../../../../../net/minecraft/client/resources/model/ResolvableModel$Resolver.d.ts'
import type { Weighted } from '../../../../../../../net/minecraft/util/random/Weighted.d.ts'
export class CompositeBlockStateModelImpl$Unbaked extends Record implements CompositeBlockStateModel$Unbaked {
    static CODEC: MapCodec<CompositeBlockStateModelImpl$Unbaked>;
    static ELEMENT_CODEC: Codec<Weighted<Variant>>;
    static HARDCODED_WEIGHTED_CODEC: Codec<WeightedVariants$Unbaked>;
    static of(paramarg0: BlockStateModel$Unbaked[]): CompositeBlockStateModelImpl$Unbaked;
    constructor(models: BlockStateModel$Unbaked[])
    // private models: BlockStateModel$Unbaked[];
    bake(arg0: ModelBaker): BlockStateModel;
    codec(): MapCodec<CompositeBlockStateModelImpl$Unbaked>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    models(): BlockStateModel$Unbaked[];
    resolveDependencies(arg0: ResolvableModel$Resolver): void;
    toString(): string;
}