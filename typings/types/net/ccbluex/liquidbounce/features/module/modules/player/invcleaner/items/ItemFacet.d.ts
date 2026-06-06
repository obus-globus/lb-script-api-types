import type { ObjectIntPair } from '../../../../../../../../../it/unimi/dsi/fastutil/objects/ObjectIntPair.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../../../java/lang/Comparable.d.ts'
import type { ItemCategory } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemCategory.d.ts'
import type { ItemFunction } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemFunction.d.ts'
import type { ItemFacet$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/ItemFacet$Companion.d.ts'
import type { ItemSlot } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
import type { ItemStackHolder } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/item/ItemStackHolder.d.ts'
import type { ItemStack } from '../../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ItemFacet extends Object implements Comparable<ItemFacet>, ItemStackHolder {
    static Companion: ItemFacet$Companion;
    constructor(itemSlot: ItemSlot)
    readonly category: ItemCategory;
    /*not mapped: */ isInHotbar(): boolean;
    readonly itemSlot: ItemSlot;
    readonly itemStack: ItemStack;
    readonly providedItemFunctions: ObjectIntPair<ItemFunction>[];
    compareTo(other: ItemFacet): number;
    isSignificantlyBetter(other: ItemFacet): boolean;
    /**
     * Should this item be kept, even if it is not allocated to any slot?
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/ItemFacet.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/ItemFacet.kt:44}
     */
    shouldKeep(): boolean;
}