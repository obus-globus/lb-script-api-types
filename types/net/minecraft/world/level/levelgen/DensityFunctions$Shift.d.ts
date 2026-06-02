import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KeyDispatchDataCodec } from '../../../../../net/minecraft/util/KeyDispatchDataCodec.d.ts'
import type { DensityFunction } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction.d.ts'
import type { DensityFunction$ContextProvider } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$ContextProvider.d.ts'
import type { DensityFunction$FunctionContext } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$FunctionContext.d.ts'
import type { DensityFunction$NoiseHolder } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$NoiseHolder.d.ts'
import type { DensityFunction$Visitor } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$Visitor.d.ts'
import type { DensityFunctions$ShiftNoise } from '../../../../../net/minecraft/world/level/levelgen/DensityFunctions$ShiftNoise.d.ts'
export class DensityFunctions$Shift extends Record implements DensityFunctions$ShiftNoise {
    static CODEC: Codec<Object>;
    static DIRECT_CODEC: Codec<DensityFunction>;
    static HOLDER_HELPER_CODEC: Codec<DensityFunction>;
    constructor(offsetNoise: DensityFunction$NoiseHolder)
    // private offsetNoise: DensityFunction$NoiseHolder;
    codec(): KeyDispatchDataCodec<DensityFunction>;
    compute(context: DensityFunction$FunctionContext): number;
    compute(localX: number, localY: number, localZ: number): number;
    equals(o: Object | null): boolean;
    fillArray(output: number[], contextProvider: DensityFunction$ContextProvider): void;
    hashCode(): number;
    mapAll(visitor: DensityFunction$Visitor): DensityFunction;
    maxValue(): number;
    minValue(): number;
    offsetNoise(): DensityFunction$NoiseHolder;
    toString(): string;
}