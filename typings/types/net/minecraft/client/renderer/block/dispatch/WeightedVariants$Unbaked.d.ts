import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockStateModel } from '../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel.d.ts'
import type { BlockStateModel$Unbaked } from '../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel$Unbaked.d.ts'
import type { BlockStateModel$UnbakedRoot } from '../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel$UnbakedRoot.d.ts'
import type { Variant } from '../../../../../../net/minecraft/client/renderer/block/dispatch/Variant.d.ts'
import type { ModelBaker } from '../../../../../../net/minecraft/client/resources/model/ModelBaker.d.ts'
import type { ResolvableModel$Resolver } from '../../../../../../net/minecraft/client/resources/model/ResolvableModel$Resolver.d.ts'
import type { Weighted } from '../../../../../../net/minecraft/util/random/Weighted.d.ts'
import type { WeightedList } from '../../../../../../net/minecraft/util/random/WeightedList.d.ts'
export class WeightedVariants$Unbaked extends Record implements BlockStateModel$Unbaked {
    static CODEC: Codec<BlockStateModel$Unbaked>;
    static ELEMENT_CODEC: Codec<Weighted<Variant>>;
    static HARDCODED_WEIGHTED_CODEC: Codec<WeightedVariants$Unbaked>;
    constructor(entries: WeightedList<BlockStateModel$Unbaked>)
    // private entries: WeightedList<BlockStateModel$Unbaked>;
    asRoot(): BlockStateModel$UnbakedRoot;
    bake(modelBakery: ModelBaker): BlockStateModel;
    entries(): WeightedList<BlockStateModel$Unbaked>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    resolveDependencies(resolver: ResolvableModel$Resolver): void;
    toString(): string;
}