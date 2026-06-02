import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ItemCooldownsAddition$Entry } from '../../../../net/ccbluex/liquidbounce/interfaces/ItemCooldownsAddition$Entry.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export interface ItemCooldownsAddition extends Object{
    liquidBounce$getCooldown(arg0: ItemStack): ItemCooldownsAddition$Entry;
}