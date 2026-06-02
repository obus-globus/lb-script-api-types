import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DensityFunction } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction.d.ts'
import type { DensityFunction$NoiseHolder } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$NoiseHolder.d.ts'
export interface DensityFunction$Visitor extends Object{
    apply(input: DensityFunction): DensityFunction;
    visitNoise(noise: DensityFunction$NoiseHolder): DensityFunction$NoiseHolder;
}