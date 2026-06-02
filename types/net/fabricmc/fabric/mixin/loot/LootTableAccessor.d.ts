import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { LootPool } from '../../../../../net/minecraft/world/level/storage/loot/LootPool.d.ts'
import type { LootItemFunction } from '../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction.d.ts'
export interface LootTableAccessor extends Object{
    fabric_getFunctions(): LootItemFunction[];
    fabric_getPools(): LootPool[];
    fabric_getRandomSequence(): Optional<Identifier>;
}