import type { SimplexNoiseSampler } from '../../../../../../../com/seedfinding/mcnoise/simplex/SimplexNoiseSampler.d.ts'
import type { JRand } from '../../../../../../../com/seedfinding/mcseed/rand/JRand.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class BetaOctaveSimplexNoiseSampler extends Object {
    constructor(arg0: JRand, arg1: number, arg2: number, arg3: number, arg4: number)
    // private lacunarity: number;
    // private octaveSamplers: SimplexNoiseSampler[];
    // private scaleX: number;
    // private scaleY: number;
    sample(arg0: number, arg1: number): number;
}