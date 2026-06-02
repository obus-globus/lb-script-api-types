import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RandomSupport$Seed128bit } from '../../../../../net/minecraft/world/level/levelgen/RandomSupport$Seed128bit.d.ts'
export class RandomSupport extends Object {
    static GOLDEN_RATIO_64: number;
    static SILVER_RATIO_64: number;
    static generateUniqueSeed(): number;
    static mixStafford13(paramz: number): number;
    static seedFromHashOf(paraminput: string): RandomSupport$Seed128bit;
    static upgradeSeedTo128bit(paramlegacySeed: number): RandomSupport$Seed128bit;
    static upgradeSeedTo128bitUnmixed(paramlegacySeed: number): RandomSupport$Seed128bit;
    constructor()
}