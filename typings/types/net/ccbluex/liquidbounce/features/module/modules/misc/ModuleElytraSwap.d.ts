import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { ScheduleInventoryActionEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/ScheduleInventoryActionEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ArmorItemSlot } from '../../../../../../../net/ccbluex/liquidbounce/utils/inventory/ArmorItemSlot.d.ts'
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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleElytraSwap.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleElytraSwap.kt:44}
 */
export class ModuleElytraSwap extends ClientModule {
    static INSTANCE: ModuleElytraSwap;
    // private /*not mapped: */ getChestplateSlot(): ArmorItemSlot;
    // private constraints: PlayerInventoryConstraints;
    // private scheduleInventoryActionHandler: EventHook<ScheduleInventoryActionEvent>;
    // private slotsToSearch: ItemSlot[];
}