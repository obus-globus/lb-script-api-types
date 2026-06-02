import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MultiNoiseSamplerHooks } from '../../../../../net/fabricmc/fabric/impl/biome/MultiNoiseSamplerHooks.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Climate$ParameterPoint } from '../../../../../net/minecraft/world/level/biome/Climate$ParameterPoint.d.ts'
import type { Climate$TargetPoint } from '../../../../../net/minecraft/world/level/biome/Climate$TargetPoint.d.ts'
import type { DensityFunction } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction.d.ts'
import type { ImprovedNoise } from '../../../../../net/minecraft/world/level/levelgen/synth/ImprovedNoise.d.ts'
export class Climate$Sampler extends Record implements MultiNoiseSamplerHooks {
    constructor(temperature: DensityFunction, humidity: DensityFunction, continentalness: DensityFunction, erosion: DensityFunction, depth: DensityFunction, weirdness: DensityFunction, spawnTarget: Climate$ParameterPoint[])
    // private continentalness: DensityFunction;
    // private depth: DensityFunction;
    // private endBiomesSampler: ImprovedNoise;
    // private erosion: DensityFunction;
    // private humidity: DensityFunction;
    // private seed: number;
    // private spawnTarget: Climate$ParameterPoint[];
    // private temperature: DensityFunction;
    // private weirdness: DensityFunction;
    continentalness(): DensityFunction;
    depth(): DensityFunction;
    equals(o: Object | null): boolean;
    erosion(): DensityFunction;
    fabric_getEndBiomesSampler(): ImprovedNoise;
    fabric_getSeed(): number;
    fabric_setSeed(arg0: number): void;
    findSpawnPosition(): BlockPos;
    hashCode(): number;
    humidity(): DensityFunction;
    sample(quartX: number, quartY: number, quartZ: number): Climate$TargetPoint;
    spawnTarget(): Climate$ParameterPoint[];
    temperature(): DensityFunction;
    toString(): string;
    weirdness(): DensityFunction;
}