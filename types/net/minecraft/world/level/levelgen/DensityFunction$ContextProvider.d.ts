import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DensityFunction } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction.d.ts'
import type { DensityFunction$FunctionContext } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$FunctionContext.d.ts'
export interface DensityFunction$ContextProvider extends Object{
    fillAllDirectly(output: number[], function_: DensityFunction): void;
    forIndex(index: number): DensityFunction$FunctionContext;
}