import type { Noise } from '../../../../com/seedfinding/mcnoise/noise/Noise.d.ts'
import type { JRand } from '../../../../com/seedfinding/mcseed/rand/JRand.d.ts'
export class SimplexNoiseSampler extends Noise {
    constructor(arg0: JRand)
    // private cornerNoise3d(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): number;
    sample2D(arg0: number, arg1: number): number;
    sample3D(arg0: number, arg1: number, arg2: number): number;
}