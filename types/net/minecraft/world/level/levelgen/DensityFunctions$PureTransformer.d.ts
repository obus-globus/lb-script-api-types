import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DensityFunction } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction.d.ts'
import type { DensityFunction$ContextProvider } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$ContextProvider.d.ts'
import type { DensityFunction$FunctionContext } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$FunctionContext.d.ts'
export interface DensityFunctions$PureTransformer extends Object, DensityFunction{
    abs(): DensityFunction;
    clamp(min: number, max: number): DensityFunction;
    compute(context: DensityFunction$FunctionContext): number;
    cube(): DensityFunction;
    fillArray(output: number[], contextProvider: DensityFunction$ContextProvider): void;
    halfNegative(): DensityFunction;
    input(): DensityFunction;
    invert(): DensityFunction;
    quarterNegative(): DensityFunction;
    square(): DensityFunction;
    squeeze(): DensityFunction;
    transform(input: number): number;
}