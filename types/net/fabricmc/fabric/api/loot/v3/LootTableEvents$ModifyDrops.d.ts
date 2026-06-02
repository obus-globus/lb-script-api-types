import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { LootContext } from '../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootTable } from '../../../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
export interface LootTableEvents$ModifyDrops extends Object{
    modifyLootTableDrops(arg0: Holder<LootTable>, arg1: LootContext, arg2: ItemStack[]): void;
}