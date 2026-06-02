import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemCooldownsAddition$Entry } from '../../../../../net/ccbluex/liquidbounce/interfaces/ItemCooldownsAddition$Entry.d.ts'
import type { ItemCooldowns } from '../../../../../net/minecraft/world/item/ItemCooldowns.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class SpecialItemExtensionKt extends Object {
    static getCooldown(paramarg0: ItemCooldowns, paramarg1: ItemStack): ItemCooldownsAddition$Entry;
}