import type { SeedMixer$Solution } from '../../../../../com/seedfinding/mccore/rand/seed/SeedMixer$Solution.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SeedMixer extends Object {
    static A: number;
    static B: number;
    static MAGIC: number;
    static getOtherSolution(paramarg0: number): number;
    static mixSeed(paramarg0: number, paramarg1: number): number;
    static unmixSeed(paramarg0: number, paramarg1: number, paramarg2: SeedMixer$Solution): number;
    constructor(arg0: number)
    constructor(arg0: number, arg1: number)
    salt: number;
    steps: number;
    combine(arg0: number): SeedMixer;
    nextSeed(arg0: number): number;
}