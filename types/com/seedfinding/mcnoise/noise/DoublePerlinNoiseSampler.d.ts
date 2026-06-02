import type { Pair } from '../../../../com/seedfinding/mccore/util/data/Pair.d.ts'
import type { OctavePerlinNoiseSampler } from '../../../../com/seedfinding/mcnoise/perlin/OctavePerlinNoiseSampler.d.ts'
import type { JRand } from '../../../../com/seedfinding/mcseed/rand/JRand.d.ts'
import type { IntStream } from '../../../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DoublePerlinNoiseSampler extends Object {
    constructor(arg0: JRand, arg1: Pair<number, number[]>)
    constructor(arg0: JRand, arg1: IntStream)
    constructor(arg0: JRand, arg1: number[])
    // private amplitude: number;
    // private firstSampler: OctavePerlinNoiseSampler;
    // private secondSampler: OctavePerlinNoiseSampler;
    sample(arg0: number, arg1: number, arg2: number): number;
}