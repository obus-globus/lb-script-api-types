import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { PositionalRandomFactory } from '../../../../../net/minecraft/world/level/levelgen/PositionalRandomFactory.d.ts'
export class XoroshiroRandomSource$XoroshiroPositionalRandomFactory extends Object implements PositionalRandomFactory {
    constructor(seedLo: number, seedHi: number)
    // private seedHi: number;
    // private seedLo: number;
    at(pos: BlockPos): RandomSource;
    at(x: number, y: number, z: number): RandomSource;
    at(pos: BlockPos): RandomSource;
    fromHashOf(name: Identifier): RandomSource;
    fromHashOf(name: string): RandomSource;
    fromHashOf(name: Identifier): RandomSource;
    fromSeed(seed: number): RandomSource;
    parityConfigString(sb: StringBuilder): void;
}