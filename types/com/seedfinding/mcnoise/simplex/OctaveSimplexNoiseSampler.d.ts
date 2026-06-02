import type { NoiseSampler } from '../../../../com/seedfinding/mcnoise/noise/NoiseSampler.d.ts'
import type { SimplexNoiseSampler } from '../../../../com/seedfinding/mcnoise/simplex/SimplexNoiseSampler.d.ts'
import type { LCG } from '../../../../com/seedfinding/mcseed/lcg/LCG.d.ts'
import type { JRand } from '../../../../com/seedfinding/mcseed/rand/JRand.d.ts'
import type { IntStream } from '../../../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OctaveSimplexNoiseSampler extends Object implements NoiseSampler {
    static SKIP_262: LCG;
    constructor(arg0: JRand, arg1: IntStream)
    constructor(arg0: JRand, arg1: number)
    constructor(arg0: JRand, arg1: number[])
    lacunarity: number;
    // private octaveSamplers: SimplexNoiseSampler[];
    persistence: number;
    sample(arg0: number, arg1: number): number;
    sample(arg0: number, arg1: number, arg2: boolean): number;
    sample(arg0: number, arg1: number, arg2: number, arg3: number): number;
}