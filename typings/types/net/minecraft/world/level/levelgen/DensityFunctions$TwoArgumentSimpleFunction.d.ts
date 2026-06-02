import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KeyDispatchDataCodec } from '../../../../../net/minecraft/util/KeyDispatchDataCodec.d.ts'
import type { DensityFunction } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction.d.ts'
import type { DensityFunctions$TwoArgumentSimpleFunction$Type } from '../../../../../net/minecraft/world/level/levelgen/DensityFunctions$TwoArgumentSimpleFunction$Type.d.ts'
export interface DensityFunctions$TwoArgumentSimpleFunction extends Object, DensityFunction{
    abs(): DensityFunction;
    argument1(): DensityFunction;
    argument2(): DensityFunction;
    clamp(min: number, max: number): DensityFunction;
    codec(): KeyDispatchDataCodec<DensityFunction>;
    cube(): DensityFunction;
    halfNegative(): DensityFunction;
    invert(): DensityFunction;
    quarterNegative(): DensityFunction;
    square(): DensityFunction;
    squeeze(): DensityFunction;
    type(): DensityFunctions$TwoArgumentSimpleFunction$Type;
}