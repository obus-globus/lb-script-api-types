import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
export interface LootPoolEntry extends Object{
    createItemStack(output: (param0: ItemStack) => void, context: LootContext): void;
    getWeight(luck: number): number;
}