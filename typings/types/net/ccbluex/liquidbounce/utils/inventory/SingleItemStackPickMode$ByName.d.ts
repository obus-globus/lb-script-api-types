import type { ModeValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { SingleItemStackPickMode } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/SingleItemStackPickMode.d.ts'
import type { StringMatchMode } from '../../../../../net/ccbluex/liquidbounce/utils/text/StringMatchMode.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class SingleItemStackPickMode$ByName extends SingleItemStackPickMode {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<any>)
    // private mode: StringMatchMode;
    // private /*not mapped: */ getMode(): StringMatchMode;
    // private names: string[];
    // private /*not mapped: */ getNames(): string[];
    test(itemStack: ItemStack): boolean;
}