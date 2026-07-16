import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemStackHolder } from '../../../../../net/ccbluex/liquidbounce/utils/item/ItemStackHolder.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Enchantment } from '../../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
export class ItemStackComparatorsKt extends Object {
    static COMPARING_DESCRIPTION_ID: (param0: ItemStack, param1: ItemStack) => number;
    static asHolderComparator(comparator: (param0: ItemStack, param1: ItemStack) => number): (param0: ItemStackHolder, param1: ItemStackHolder) => number;
    static comparingEnchantmentLevel(key: ResourceKey<Enchantment>): (param0: ItemStack, param1: ItemStack) => number;
}