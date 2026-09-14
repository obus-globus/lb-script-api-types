import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { ScheduleInventoryActionEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/ScheduleInventoryActionEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ItemSlot } from '../../../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
import type { PlayerInventoryConstraints } from '../../../../../../../net/ccbluex/liquidbounce/utils/inventory/PlayerInventoryConstraints.d.ts'
/**
 * ModuleElytraSwap
 *
 * Allows you to quickly replace your chestplate with an elytra and vice versa.
 *
 * @author sqlerrorthing
 *
 * @since 2/13/2025
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleElytraSwap.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleElytraSwap.kt:43}
 */
export class ModuleElytraSwap extends ClientModule {
    static INSTANCE: ModuleElytraSwap;
    // private constraints: PlayerInventoryConstraints;
    // private scheduleInventoryActionHandler: EventHook<ScheduleInventoryActionEvent>;
    // private slotsToSearch: ItemSlot[];
}