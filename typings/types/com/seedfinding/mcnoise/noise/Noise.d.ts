import type { JRand } from '../../../../com/seedfinding/mcseed/rand/JRand.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Noise extends Object {
    constructor(arg0: JRand)
    originX: number;
    originY: number;
    originZ: number;
    // private permutations: number[];
    lookup(arg0: number): number;
}