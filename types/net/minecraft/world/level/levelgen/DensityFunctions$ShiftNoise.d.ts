import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DensityFunction } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction.d.ts'
import type { DensityFunction$ContextProvider } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$ContextProvider.d.ts'
import type { DensityFunction$NoiseHolder } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$NoiseHolder.d.ts'
export interface DensityFunctions$ShiftNoise extends Object, DensityFunction{
    abs(): DensityFunction;
    clamp(min: number, max: number): DensityFunction;
    compute(localX: number, localY: number, localZ: number): number;
    cube(): DensityFunction;
    fillArray(output: number[], contextProvider: DensityFunction$ContextProvider): void;
    halfNegative(): DensityFunction;
    invert(): DensityFunction;
    maxValue(): number;
    minValue(): number;
    offsetNoise(): DensityFunction$NoiseHolder;
    quarterNegative(): DensityFunction;
    square(): DensityFunction;
    squeeze(): DensityFunction;
}