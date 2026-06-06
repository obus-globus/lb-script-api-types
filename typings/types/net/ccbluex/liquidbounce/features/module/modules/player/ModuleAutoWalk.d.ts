import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { MovementInputEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * AutoWalk module
 *
 * Automatically makes you walk.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleAutoWalk.kt#L27 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleAutoWalk.kt:27}
 */
export class ModuleAutoWalk extends ClientModule {
    static INSTANCE: ModuleAutoWalk;
    // private moveInputHandler: EventHook<MovementInputEvent>;
}