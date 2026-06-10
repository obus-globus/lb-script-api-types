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
export class DensityFunctions$ShiftedNoise extends Record implements DensityFunction {
    static CODEC: Codec<Holder<DensityFunction>>;
    static CODEC: KeyDispatchDataCodec<DensityFunctions$ShiftedNoise>;
    static DIRECT_CODEC: Codec<DensityFunction>;
    static HOLDER_HELPER_CODEC: Codec<DensityFunction>;
    // private noise: DensityFunction$NoiseHolder;
    // private shiftX: DensityFunction;
    // private shiftY: DensityFunction;
    // private shiftZ: DensityFunction;
    // private xzScale: number;
    // private yScale: number;
    abs(): DensityFunction;
    clamp(min: number, max: number): DensityFunction;
    codec(): KeyDispatchDataCodec<DensityFunction>;
    compute(context: DensityFunction$FunctionContext): number;
    cube(): DensityFunction;
    equals(o: Object | null): boolean;
    fillArray(output: number[], contextProvider: DensityFunction$ContextProvider): void;
    halfNegative(): DensityFunction;
    hashCode(): number;
    invert(): DensityFunction;
    mapAll(visitor: DensityFunction$Visitor): DensityFunction;
    maxValue(): number;
    minValue(): number;
    noise(): DensityFunction$NoiseHolder;
    quarterNegative(): DensityFunction;
    shiftX(): DensityFunction;
    shiftY(): DensityFunction;
    shiftZ(): DensityFunction;
    square(): DensityFunction;
    squeeze(): DensityFunction;
    toString(): string;
    xzScale(): number;
    yScale(): number;
}