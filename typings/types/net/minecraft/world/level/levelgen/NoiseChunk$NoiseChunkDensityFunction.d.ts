import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DensityFunction } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction.d.ts'
export interface NoiseChunk$NoiseChunkDensityFunction extends Object, DensityFunction{
    abs(): DensityFunction;
    clamp(min: number, max: number): DensityFunction;
    cube(): DensityFunction;
    halfNegative(): DensityFunction;
    invert(): DensityFunction;
    maxValue(): number;
    minValue(): number;
    quarterNegative(): DensityFunction;
    square(): DensityFunction;
    squeeze(): DensityFunction;
    wrapped(): DensityFunction;
}