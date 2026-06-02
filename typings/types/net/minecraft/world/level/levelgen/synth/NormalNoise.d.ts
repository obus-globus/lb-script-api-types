import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { NormalNoise$NoiseParameters } from '../../../../../../net/minecraft/world/level/levelgen/synth/NormalNoise$NoiseParameters.d.ts'
import type { PerlinNoise } from '../../../../../../net/minecraft/world/level/levelgen/synth/PerlinNoise.d.ts'
export class NormalNoise extends Object {
    static create(paramrandom: RandomSource, paramfirstOctave: number, paramamplitudes: number[]): NormalNoise;
    static create(paramrandom: RandomSource, paramparameters: NormalNoise$NoiseParameters): NormalNoise;
    static createLegacyNetherBiome(paramrandom: RandomSource, paramparameters: NormalNoise$NoiseParameters): NormalNoise;
    private constructor(random: RandomSource, parameters: NormalNoise$NoiseParameters, useNewInitialization: boolean)
    // private first: PerlinNoise;
    // private maxValue: number;
    // private parameters: NormalNoise$NoiseParameters;
    // private second: PerlinNoise;
    // private valueFactor: number;
    getValue(x: number, y: number, z: number): number;
    maxValue(): number;
    parameters(): NormalNoise$NoiseParameters;
    parityConfigString(sb: StringBuilder): void;
}