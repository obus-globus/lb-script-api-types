import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { KeyDispatchDataCodec } from '../../../../../net/minecraft/util/KeyDispatchDataCodec.d.ts'
import type { DensityFunction } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction.d.ts'
import type { DensityFunction$ContextProvider } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$ContextProvider.d.ts'
import type { DensityFunction$FunctionContext } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$FunctionContext.d.ts'
import type { DensityFunction$NoiseHolder } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$NoiseHolder.d.ts'
import type { DensityFunction$Visitor } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$Visitor.d.ts'
import type { DensityFunctions$TransformerWithContext } from '../../../../../net/minecraft/world/level/levelgen/DensityFunctions$TransformerWithContext.d.ts'
import type { DensityFunctions$WeirdScaledSampler$RarityValueMapper } from '../../../../../net/minecraft/world/level/levelgen/DensityFunctions$WeirdScaledSampler$RarityValueMapper.d.ts'
export class DensityFunctions$WeirdScaledSampler extends Record implements DensityFunctions$TransformerWithContext {
    static CODEC: Codec<Holder<DensityFunction>>;
    static CODEC: KeyDispatchDataCodec<DensityFunctions$WeirdScaledSampler>;
    static DIRECT_CODEC: Codec<DensityFunction>;
    static HOLDER_HELPER_CODEC: Codec<DensityFunction>;
    constructor(input: DensityFunction, noise: DensityFunction$NoiseHolder, rarityValueMapper: DensityFunctions$WeirdScaledSampler$RarityValueMapper)
    // private input: DensityFunction;
    // private noise: DensityFunction$NoiseHolder;
    // private rarityValueMapper: DensityFunctions$WeirdScaledSampler$RarityValueMapper;
    codec(): KeyDispatchDataCodec<DensityFunction>;
    compute(context: DensityFunction$FunctionContext): number;
    equals(o: Object | null): boolean;
    fillArray(output: number[], contextProvider: DensityFunction$ContextProvider): void;
    hashCode(): number;
    input(): DensityFunction;
    mapAll(visitor: DensityFunction$Visitor): DensityFunction;
    maxValue(): number;
    minValue(): number;
    noise(): DensityFunction$NoiseHolder;
    rarityValueMapper(): DensityFunctions$WeirdScaledSampler$RarityValueMapper;
    toString(): string;
    transform(context: DensityFunction$FunctionContext, input: number): number;
}