import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { DataResult } from '../../../../../com/mojang/serialization/DataResult.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KeyDispatchDataCodec } from '../../../../../net/minecraft/util/KeyDispatchDataCodec.d.ts'
import type { DensityFunction } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction.d.ts'
import type { DensityFunction$ContextProvider } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$ContextProvider.d.ts'
import type { DensityFunction$FunctionContext } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$FunctionContext.d.ts'
import type { DensityFunction$Visitor } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$Visitor.d.ts'
export class DensityFunctions$IntervalSelect extends Record implements DensityFunction {
    static CODEC: Codec<DensityFunction>;
    static CODEC: KeyDispatchDataCodec<DensityFunctions$IntervalSelect>;
    static DATA_CODEC: MapCodec<DensityFunctions$IntervalSelect>;
    private constructor(input: DensityFunction, thresholds: (Object | null)[], functions: DensityFunction[])
    // private functions: DensityFunction[];
    // private input: DensityFunction;
    // private thresholds: (Object | null)[];
    abs(): DensityFunction;
    clamp(min: number, max: number): DensityFunction;
    codec(): KeyDispatchDataCodec<DensityFunctions$IntervalSelect>;
    compute(context: DensityFunction$FunctionContext): number;
    // private compute(context: DensityFunction$FunctionContext, input: number): number;
    cube(): DensityFunction;
    equals(o: Object | null): boolean;
    fillArray(output: number[], contextProvider: DensityFunction$ContextProvider): void;
    functions(): DensityFunction[];
    halfNegative(): DensityFunction;
    hashCode(): number;
    input(): DensityFunction;
    invert(): DensityFunction;
    mapAll(visitor: DensityFunction$Visitor): DensityFunction;
    mapChildren(visitor: DensityFunction$Visitor): DensityFunction;
    maxValue(): number;
    minValue(): number;
    quarterNegative(): DensityFunction;
    square(): DensityFunction;
    squeeze(): DensityFunction;
    thresholds(): (Object | null)[];
    toString(): string;
    // private validate(): DataResult<DensityFunctions$IntervalSelect>;
}