import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockStateModel } from '../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel.d.ts'
import type { BlockStateModel$Unbaked } from '../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel$Unbaked.d.ts'
import type { BlockStateModel$UnbakedRoot } from '../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel$UnbakedRoot.d.ts'
import type { Variant } from '../../../../../../net/minecraft/client/renderer/block/dispatch/Variant.d.ts'
import type { WeightedVariants$Unbaked } from '../../../../../../net/minecraft/client/renderer/block/dispatch/WeightedVariants$Unbaked.d.ts'
import type { ModelBaker } from '../../../../../../net/minecraft/client/resources/model/ModelBaker.d.ts'
import type { ResolvableModel$Resolver } from '../../../../../../net/minecraft/client/resources/model/ResolvableModel$Resolver.d.ts'
import type { Weighted } from '../../../../../../net/minecraft/util/random/Weighted.d.ts'
export class SingleVariant$Unbaked extends Record implements BlockStateModel$Unbaked {
    static CODEC: Codec<BlockStateModel$Unbaked>;
    static CODEC: Codec<SingleVariant$Unbaked>;
    static ELEMENT_CODEC: Codec<Weighted<Variant>>;
    static HARDCODED_WEIGHTED_CODEC: Codec<WeightedVariants$Unbaked>;
    constructor(variant: Variant)
    // private variant: Variant;
    asRoot(): BlockStateModel$UnbakedRoot;
    bake(modelBakery: ModelBaker): BlockStateModel;
    equals(o: Object | null): boolean;
    hashCode(): number;
    resolveDependencies(resolver: ResolvableModel$Resolver): void;
    toString(): string;
    variant(): Variant;
}