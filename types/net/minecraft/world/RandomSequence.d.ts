import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { RandomSource } from '../../../net/minecraft/util/RandomSource.d.ts'
import type { RandomSupport$Seed128bit } from '../../../net/minecraft/world/level/levelgen/RandomSupport$Seed128bit.d.ts'
import type { XoroshiroRandomSource } from '../../../net/minecraft/world/level/levelgen/XoroshiroRandomSource.d.ts'
export class RandomSequence extends Object {
    static CODEC: Codec<RandomSequence>;
    static seedForKey(paramkey: Identifier): RandomSupport$Seed128bit;
    constructor(seed: number, key: Optional<Identifier>)
    constructor(seed: number, key: Identifier)
    constructor(source: XoroshiroRandomSource)
    // private source: XoroshiroRandomSource;
    random(): RandomSource;
}