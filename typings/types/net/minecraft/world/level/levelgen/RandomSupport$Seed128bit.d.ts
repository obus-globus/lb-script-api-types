import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class RandomSupport$Seed128bit extends Record {
    constructor(seedLo: number, seedHi: number)
    // private seedHi: number;
    // private seedLo: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    mixed(): RandomSupport$Seed128bit;
    seedHi(): number;
    seedLo(): number;
    toString(): string;
    xor(lo: number, hi: number): RandomSupport$Seed128bit;
    xor(other: RandomSupport$Seed128bit): RandomSupport$Seed128bit;
}