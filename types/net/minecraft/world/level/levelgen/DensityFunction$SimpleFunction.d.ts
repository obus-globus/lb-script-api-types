import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DensityFunction } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction.d.ts'
import type { DensityFunction$ContextProvider } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$ContextProvider.d.ts'
import type { DensityFunction$Visitor } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$Visitor.d.ts'
export interface DensityFunction$SimpleFunction extends Object, DensityFunction{
    abs(): DensityFunction;
    clamp(min: number, max: number): DensityFunction;
    cube(): DensityFunction;
    fillArray(output: number[], contextProvider: DensityFunction$ContextProvider): void;
    halfNegative(): DensityFunction;
    invert(): DensityFunction;
    mapAll(visitor: DensityFunction$Visitor): DensityFunction;
    quarterNegative(): DensityFunction;
    square(): DensityFunction;
    squeeze(): DensityFunction;
}