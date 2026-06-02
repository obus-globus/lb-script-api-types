import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModeValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { SingleItemStackPickMode } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/SingleItemStackPickMode.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class SingleItemStackPickMode$ByItem extends SingleItemStackPickMode {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<Object>)
    // private items: Item[];
    // private /*not mapped: */ getItems(): Item[];
    test(itemStack: ItemStack): boolean;
}