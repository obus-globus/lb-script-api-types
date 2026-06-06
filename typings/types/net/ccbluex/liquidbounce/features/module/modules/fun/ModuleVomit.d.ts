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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/ModuleVomit.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/ModuleVomit.kt:35}
 */
export class ModuleVomit extends ClientModule {
    static INSTANCE: ModuleVomit;
    // private inventoryConstraints: PlayerInventoryConstraints;
    // private random: RandomSource;
    // private vomitHandler: EventHook<ScheduleInventoryActionEvent>;
}