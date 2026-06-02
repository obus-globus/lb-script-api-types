import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LootPoolEntryContainer } from '../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolEntryContainer.d.ts'
import type { LootItemFunction } from '../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction.d.ts'
import type { LootItemCondition } from '../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
import type { NumberProvider } from '../../../../../net/minecraft/world/level/storage/loot/providers/number/NumberProvider.d.ts'
export interface LootPoolAccessor extends Object{
    fabric_getBonusRolls(): NumberProvider;
    fabric_getConditions(): LootItemCondition[];
    fabric_getEntries(): LootPoolEntryContainer[];
    fabric_getFunctions(): LootItemFunction[];
    fabric_getRolls(): NumberProvider;
}