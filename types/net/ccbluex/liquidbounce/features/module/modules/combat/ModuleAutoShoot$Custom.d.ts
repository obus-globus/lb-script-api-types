import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ModuleAutoShoot$ThrowableTypeMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/ModuleAutoShoot$ThrowableTypeMode.d.ts'
import type { Filter } from '../../../../../../../net/ccbluex/liquidbounce/utils/collection/Filter.d.ts'
import type { HotbarItemSlot } from '../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { Item } from '../../../../../../../net/minecraft/world/item/Item.d.ts'
export class ModuleAutoShoot$Custom extends ModuleAutoShoot$ThrowableTypeMode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleAutoShoot$Custom;
    // private filter: Filter;
    // private /*not mapped: */ getFilter(): Filter;
    // private items: Item[];
    // private /*not mapped: */ getItems(): Item[];
    findSlot(): HotbarItemSlot | null;
}