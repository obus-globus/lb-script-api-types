import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { SimplexNoise } from '../../../../../../net/minecraft/world/level/levelgen/synth/SimplexNoise.d.ts'
export class PerlinSimplexNoise extends Object {
    private constructor(random: RandomSource, octaveSet: (Object | null)[])
    constructor(random: RandomSource, octaveSet: number[])
    // private highestFreqInputFactor: number;
    // private highestFreqValueFactor: number;
    // private noiseLevels: SimplexNoise[];
    getValue(x: number, y: number, useNoiseStart: boolean): number;
}