import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockStateModel$Unbaked } from '../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel$Unbaked.d.ts'
import type { WeightedVariants$Unbaked } from '../../../../../../../net/minecraft/client/renderer/block/dispatch/WeightedVariants$Unbaked.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class CustomUnbakedBlockStateModelRegistry extends Object {
    static MODEL_CODEC: Codec<BlockStateModel$Unbaked>;
    static WEIGHTED_MODEL_CODEC: Codec<WeightedVariants$Unbaked>;
    static register(paramarg0: Identifier, paramarg1: MapCodec<Object>): void;
    constructor()
}