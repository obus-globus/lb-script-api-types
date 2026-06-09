import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootPoolEntry } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolEntry.d.ts'
export interface ComposableEntryContainer extends Object {
    and(other: (param0: LootContext, param1: (param0: LootPoolEntry) => void) => kotlin.Boolean): (param0: LootContext, param1: (param0: LootPoolEntry) => void) => kotlin.Boolean;
    expand(context: LootContext, output: (param0: LootPoolEntry) => void): boolean;
    or(other: (param0: LootContext, param1: (param0: LootPoolEntry) => void) => kotlin.Boolean): (param0: LootContext, param1: (param0: LootPoolEntry) => void) => kotlin.Boolean;
}