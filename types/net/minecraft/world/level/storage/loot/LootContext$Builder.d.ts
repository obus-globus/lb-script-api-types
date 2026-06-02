import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { LootContext } from '../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootParams } from '../../../../../../net/minecraft/world/level/storage/loot/LootParams.d.ts'
export class LootContext$Builder extends Object {
    constructor(params: LootParams)
    // private params: LootParams;
    // private random: RandomSource;
    create(randomSequenceKey: Optional<Identifier>): LootContext;
    getLevel(): ServerLevel;
    withOptionalRandomSeed(seed: number): LootContext$Builder;
    withOptionalRandomSource(randomSource: RandomSource): LootContext$Builder;
}