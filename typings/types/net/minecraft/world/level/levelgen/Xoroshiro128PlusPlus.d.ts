import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RandomSupport$Seed128bit } from '../../../../../net/minecraft/world/level/levelgen/RandomSupport$Seed128bit.d.ts'
export class Xoroshiro128PlusPlus extends Object {
    static CODEC: Codec<Xoroshiro128PlusPlus>;
    constructor(seedLo: number, seedHi: number)
    constructor(seed: RandomSupport$Seed128bit)
    // private seedHi: number;
    // private seedLo: number;
    nextLong(): number;
}