import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { KeyDispatchDataCodec } from '../../../../../net/minecraft/util/KeyDispatchDataCodec.d.ts'
import type { DensityFunction } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction.d.ts'
import type { DensityFunction$ContextProvider } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$ContextProvider.d.ts'
import type { DensityFunction$FunctionContext } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$FunctionContext.d.ts'
import type { DensityFunction$Visitor } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$Visitor.d.ts'
import type { DensityFunctions$MulOrAdd$Type } from '../../../../../net/minecraft/world/level/levelgen/DensityFunctions$MulOrAdd$Type.d.ts'
import type { DensityFunctions$PureTransformer } from '../../../../../net/minecraft/world/level/levelgen/DensityFunctions$PureTransformer.d.ts'
import type { DensityFunctions$TwoArgumentSimpleFunction } from '../../../../../net/minecraft/world/level/levelgen/DensityFunctions$TwoArgumentSimpleFunction.d.ts'
import type { DensityFunctions$TwoArgumentSimpleFunction$Type } from '../../../../../net/minecraft/world/level/levelgen/DensityFunctions$TwoArgumentSimpleFunction$Type.d.ts'
import type { Logger } from '../../../../../org/slf4j/Logger.d.ts'
export class DensityFunctions$MulOrAdd extends Record implements DensityFunctions$PureTransformer, DensityFunctions$TwoArgumentSimpleFunction {
    static CODEC: Codec<Holder<DensityFunction>>;
    static DIRECT_CODEC: Codec<DensityFunction>;
    static HOLDER_HELPER_CODEC: Codec<DensityFunction>;
    static LOGGER: Logger;
    static create(paramtype: DensityFunctions$TwoArgumentSimpleFunction$Type, paramargument1: DensityFunction, paramargument2: DensityFunction): DensityFunctions$TwoArgumentSimpleFunction;
    // private argument: number;
    // private input: DensityFunction;
    // private maxValue: number;
    // private minValue: number;
    // private specificType: DensityFunctions$MulOrAdd$Type;
    argument(): number;
    argument1(): DensityFunction;
    argument2(): DensityFunction;
    codec(): KeyDispatchDataCodec<DensityFunction>;
    compute(context: DensityFunction$FunctionContext): number;
    equals(o: Object | null): boolean;
    fillArray(output: number[], contextProvider: DensityFunction$ContextProvider): void;
    hashCode(): number;
    input(): DensityFunction;
    mapAll(visitor: DensityFunction$Visitor): DensityFunction;
    maxValue(): number;
    minValue(): number;
    specificType(): DensityFunctions$MulOrAdd$Type;
    toString(): string;
    transform(input: number): number;
    type(): DensityFunctions$TwoArgumentSimpleFunction$Type;
}