import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { ScheduleInventoryActionEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/ScheduleInventoryActionEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { Filter } from '../../../../../../../net/ccbluex/liquidbounce/utils/collection/Filter.d.ts'
import type { CheckScreenHandlerTypeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/utils/inventory/CheckScreenHandlerTypeValueGroup.d.ts'
import type { CheckScreenTitleValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/utils/inventory/CheckScreenTitleValueGroup.d.ts'
import type { PlayerInventoryConstraints } from '../../../../../../../net/ccbluex/liquidbounce/utils/inventory/PlayerInventoryConstraints.d.ts'
import type { Item } from '../../../../../../../net/minecraft/world/item/Item.d.ts'
/**
 * ChestCleaner module
 *
 * Automatically drops unwanted items from a chest.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleChestCleaner.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleChestCleaner.kt:42}
 */
export class ModuleChestCleaner extends ClientModule {
    static INSTANCE: ModuleChestCleaner;
    // private autoClose: boolean;
    // private /*not mapped: */ getAutoClose(): boolean;
    // private checkScreenHandlerType: CheckScreenHandlerTypeValueGroup;
    // private checkScreenTitle: CheckScreenTitleValueGroup;
    // private filter: Filter;
    // private /*not mapped: */ getFilter(): Filter;
    // private inventoryConstraints: PlayerInventoryConstraints;
    // private itemsList: Item[];
    // private /*not mapped: */ getItemsList(): Item[];
    // private scheduleInventoryAction: EventHook<ScheduleInventoryActionEvent>;
}