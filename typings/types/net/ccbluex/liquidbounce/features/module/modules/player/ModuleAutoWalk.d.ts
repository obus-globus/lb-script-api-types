import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { MovementInputEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * AutoWalk module
 *
 * Automatically makes you walk.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleAutoWalk.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleAutoWalk.kt:32}
 */
export class ModuleAutoWalk extends ClientModule {
    static INSTANCE: ModuleAutoWalk;
    // private moveInputHandler: EventHook<MovementInputEvent>;
}