import type { Object } from '../../../../java/lang/Object.d.ts'
export class MushroomCondition extends Object {
    static main(paramarg0: string[]): void;
    constructor(arg0: number, arg1: number, arg2: number)
    readonly lower32Bits: number;
    readonly numValidSeeds: number;
    readonly upperSeedAddend: number;
    readonly upperSeedMultiplier: number;
    readonly x: number;
    readonly z: number;
    getLower32Bits(): number;
    getNumValidSeeds(): number;
    getUpperSeedAddend(): number;
    getUpperSeedMultiplier(): number;
    getX(): number;
    getZ(): number;
    // private inverse32Bit(arg0: number): number;
    // private modInverse(arg0: number, arg1: number): number;
}