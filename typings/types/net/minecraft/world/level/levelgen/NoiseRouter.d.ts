import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DensityFunction } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction.d.ts'
import type { DensityFunction$Visitor } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$Visitor.d.ts'
export class NoiseRouter extends Record {
    static CODEC: Codec<NoiseRouter>;
    constructor(barrierNoise: DensityFunction, fluidLevelFloodednessNoise: DensityFunction, fluidLevelSpreadNoise: DensityFunction, lavaNoise: DensityFunction, temperature: DensityFunction, vegetation: DensityFunction, continents: DensityFunction, erosion: DensityFunction, depth: DensityFunction, ridges: DensityFunction, preliminarySurfaceLevel: DensityFunction, finalDensity: DensityFunction, veinToggle: DensityFunction, veinRidged: DensityFunction, veinGap: DensityFunction)
    // private barrierNoise: DensityFunction;
    // private continents: DensityFunction;
    // private depth: DensityFunction;
    // private erosion: DensityFunction;
    // private finalDensity: DensityFunction;
    // private fluidLevelFloodednessNoise: DensityFunction;
    // private fluidLevelSpreadNoise: DensityFunction;
    // private lavaNoise: DensityFunction;
    // private preliminarySurfaceLevel: DensityFunction;
    // private ridges: DensityFunction;
    // private temperature: DensityFunction;
    // private vegetation: DensityFunction;
    // private veinGap: DensityFunction;
    // private veinRidged: DensityFunction;
    // private veinToggle: DensityFunction;
    barrierNoise(): DensityFunction;
    continents(): DensityFunction;
    depth(): DensityFunction;
    equals(o: Object | null): boolean;
    erosion(): DensityFunction;
    finalDensity(): DensityFunction;
    fluidLevelFloodednessNoise(): DensityFunction;
    fluidLevelSpreadNoise(): DensityFunction;
    hashCode(): number;
    lavaNoise(): DensityFunction;
    mapAll(visitor: DensityFunction$Visitor): NoiseRouter;
    preliminarySurfaceLevel(): DensityFunction;
    ridges(): DensityFunction;
    temperature(): DensityFunction;
    toString(): string;
    vegetation(): DensityFunction;
    veinGap(): DensityFunction;
    veinRidged(): DensityFunction;
    veinToggle(): DensityFunction;
}