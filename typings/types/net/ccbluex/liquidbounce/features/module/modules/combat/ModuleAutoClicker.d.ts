import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { Item } from '../../../../../../../net/minecraft/world/item/Item.d.ts'
/**
 * AutoClicker module
 *
 * Clicks automatically when holding down a mouse button.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b7cc679e71b1bc95d19a1e1535f79a1c2164149e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleAutoClicker.kt#L59 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleAutoClicker.kt:59}
 */
export class ModuleAutoClicker extends ClientModule {
    static INSTANCE: ModuleAutoClicker;
    // private SPECIAL_ITEMS_FOR_IGNORE: Item[];
    readonly attack: boolean;
    // private lastFinishBreak: number;
    // private packetHandler: EventHook<PacketEvent>;
    // private tickHandler: EventHook<GameTickEvent>;
    readonly use: boolean;
}