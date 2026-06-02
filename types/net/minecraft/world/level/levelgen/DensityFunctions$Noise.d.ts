import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KeyDispatchDataCodec } from '../../../../../net/minecraft/util/KeyDispatchDataCodec.d.ts'
import type { DensityFunction } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction.d.ts'
import type { DensityFunction$ContextProvider } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$ContextProvider.d.ts'
import type { DensityFunction$FunctionContext } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$FunctionContext.d.ts'
import type { DensityFunction$NoiseHolder } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$NoiseHolder.d.ts'
import type { DensityFunction$Visitor } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$Visitor.d.ts'
export class DensityFunctions$Noise extends Record implements DensityFunction {
    static CODEC: Codec<Object>;
    static CODEC: KeyDispatchDataCodec<DensityFunctions$Noise>;
    static DATA_CODEC: MapCodec<DensityFunctions$Noise>;
    static DIRECT_CODEC: Codec<DensityFunction>;
    static HOLDER_HELPER_CODEC: Codec<DensityFunction>;
    // private noise: DensityFunction$NoiseHolder;
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
    square(): DensityFunction;
    squeeze(): DensityFunction;
    toString(): string;
    xzScale(): number;
    yScale(): number;
}