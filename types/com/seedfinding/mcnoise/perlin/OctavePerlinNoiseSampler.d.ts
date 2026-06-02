import type { Pair } from '../../../../com/seedfinding/mccore/util/data/Pair.d.ts'
import type { NoiseSampler } from '../../../../com/seedfinding/mcnoise/noise/NoiseSampler.d.ts'
import type { PerlinNoiseSampler } from '../../../../com/seedfinding/mcnoise/perlin/PerlinNoiseSampler.d.ts'
import type { LCG } from '../../../../com/seedfinding/mcseed/lcg/LCG.d.ts'
import type { JRand } from '../../../../com/seedfinding/mcseed/rand/JRand.d.ts'
import type { IntStream } from '../../../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OctavePerlinNoiseSampler extends Object implements NoiseSampler {
    static SKIP_262: LCG;
    static makeAmplitudes(paramarg0: number[]): Pair<number, Object>;
    constructor(arg0: JRand, arg1: Pair<number, number[]>)
    constructor(arg0: JRand, arg1: IntStream)
    constructor(arg0: JRand, arg1: number)
    constructor(arg0: JRand, arg1: number[])
    // private amplitudes: number[];
    lacunarity: number;
    // private octaveSamplers: PerlinNoiseSampler[];
    persistence: number;
    getCount(): number;
    getOctave(arg0: number): PerlinNoiseSampler;
    sample(arg0: number, arg1: number, arg2: number): number;
    sample(arg0: number, arg1: number, arg2: number, arg3: number): number;
    sample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
}