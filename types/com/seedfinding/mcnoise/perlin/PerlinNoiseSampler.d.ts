import type { Triplet } from '../../../../com/seedfinding/mccore/util/data/Triplet.d.ts'
import type { Noise } from '../../../../com/seedfinding/mcnoise/noise/Noise.d.ts'
import type { JRand } from '../../../../com/seedfinding/mcseed/rand/JRand.d.ts'
export class PerlinNoiseSampler extends Noise {
    constructor(arg0: JRand)
    getArgs(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): Triplet<number[], number[], number[]>;
    sample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): number;
    samplePermutations(arg0: number[], arg1: number[]): number[];
}