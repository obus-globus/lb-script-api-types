import type { LCG } from '../../../../com/seedfinding/mcseed/lcg/LCG.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Rand extends Object {
    constructor(arg0: LCG)
    constructor(arg0: LCG, arg1: number)
    readonly lcg: LCG;
    readonly seed: number;
    advance(arg0: LCG): void;
    advance(arg0: number): void;
    equals(arg0: Object | null): boolean;
    getLcg(): LCG;
    getSeed(): number;
    hashCode(): number;
    nextBits(arg0: number): number;
    nextSeed(): number;
    setSeed(arg0: number): void;
    toString(): string;
}