import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Random } from '../../kotlin/random/Random.d.ts'
import type { Random$Default } from '../../kotlin/random/Random$Default.d.ts'
export class XorWowRandom extends Random implements Serializable {
    static Default: Random$Default;
    constructor(seed1: number, seed2: number)
    constructor(x: number, y: number, z: number, w: number, v: number, addend: number)
    // private addend: number;
    // private v: number;
    // private w: number;
    // private x: number;
    // private y: number;
    // private z: number;
    // private checkInvariants(): void;
    nextBits(bitCount: number): number;
    nextInt(): number;
    nextInt(until: number): number;
    nextInt(from: number, until: number): number;
    // private readResolve(): Object;
}