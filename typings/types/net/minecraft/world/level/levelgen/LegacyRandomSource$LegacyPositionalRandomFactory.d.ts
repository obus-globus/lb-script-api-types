import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { PositionalRandomFactory } from '../../../../../net/minecraft/world/level/levelgen/PositionalRandomFactory.d.ts'
export class LegacyRandomSource$LegacyPositionalRandomFactory extends Object implements PositionalRandomFactory {
    constructor(seed: number)
    // private seed: number;
    at(x: number, y: number, z: number): RandomSource;
    at(pos: BlockPos): RandomSource;
    fromHashOf(name: string): RandomSource;
    fromHashOf(name: Identifier): RandomSource;
    fromSeed(seed: number): RandomSource;
    parityConfigString(sb: StringBuilder): void;
}