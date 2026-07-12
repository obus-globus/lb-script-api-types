import type { Pair } from '../../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { IntStream } from '../../../../../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { ImprovedNoise } from '../../../../../../net/minecraft/world/level/levelgen/synth/ImprovedNoise.d.ts'
export class PerlinNoise extends Object {
    static create(paramrandom: RandomSource, paramfirstOctave: number, paramfirstAmplitude: number, ...paramamplitudes: number[]): PerlinNoise;
    static create(paramrandom: RandomSource, paramfirstOctave: number, paramamplitudes: (Object | null)[]): PerlinNoise;
    static create(paramrandom: RandomSource, paramoctaveSet: number[]): PerlinNoise;
    static create(paramrandom: RandomSource, paramoctaves: IntStream): PerlinNoise;
    static createLegacyForBlendedNoise(paramrandom: RandomSource, paramoctaves: IntStream): PerlinNoise;
    static createLegacyForLegacyNetherBiome(paramrandom: RandomSource, paramfirstOctave: number, paramamplitudes: (Object | null)[]): PerlinNoise;
    static wrap(paramx: number): number;
    constructor(random: RandomSource, pair: Pair<number, (Object | null)[]>, useNewInitialization: boolean)
    // private amplitudes: (Object | null)[];
    // private firstOctave: number;
    // private lowestFreqInputFactor: number;
    // private lowestFreqValueFactor: number;
    // private maxValue: number;
    // private noiseLevels: ImprovedNoise[];
    amplitudes(): (Object | null)[];
    // private edgeValue(noiseValue: number): number;
    firstOctave(): number;
    getOctaveNoise(i: number): ImprovedNoise;
    getValue(x: number, y: number, z: number): number;
    getValue(x: number, y: number, z: number, yScale: number, yFudge: number): number;
    maxBrokenValue(yScale: number): number;
    maxValue(): number;
    parityConfigString(sb: StringBuilder): void;
}