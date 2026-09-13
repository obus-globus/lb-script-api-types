import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { MovementInputEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * AutoWalk module
 *
 * Automatically makes you walk.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6442c02e147c8fd9657f94f1554f63e786c2a3c0/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleAutoWalk.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleAutoWalk.kt:32}
 */
export class ModuleAutoWalk extends ClientModule {
    static INSTANCE: ModuleAutoWalk;
    // private moveInputHandler: EventHook<MovementInputEvent>;
}