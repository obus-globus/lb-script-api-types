import type { Object } from '../../java/lang/Object.d.ts'
import type { Random$Xorshiro128 } from '../../org/joml/Random$Xorshiro128.d.ts'
export class Random extends Object {
    static newSeed(): number;
    constructor()
    constructor(arg0: number)
    // private rnd: Random$Xorshiro128;
    nextFloat(): number;
    nextInt(arg0: number): number;
}