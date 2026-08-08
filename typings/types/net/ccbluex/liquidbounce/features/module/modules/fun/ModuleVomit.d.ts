import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { ScheduleInventoryActionEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/ScheduleInventoryActionEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { PlayerInventoryConstraints } from '../../../../../../../net/ccbluex/liquidbounce/utils/inventory/PlayerInventoryConstraints.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
/**
 * Vomit module
 *
 * Drops items from the inventory in a random order to make it look like the player is vomiting.
 * If the player is in creative mode, the player will drop random block items.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/177e1582d6f271ebe95911c43b6987f81dca51f8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/ModuleVomit.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/ModuleVomit.kt:41}
 */
export class ModuleVomit extends ClientModule {
    static INSTANCE: ModuleVomit;
    // private inventoryConstraints: PlayerInventoryConstraints;
    // private random: RandomSource;
    // private vomitHandler: EventHook<ScheduleInventoryActionEvent>;
}