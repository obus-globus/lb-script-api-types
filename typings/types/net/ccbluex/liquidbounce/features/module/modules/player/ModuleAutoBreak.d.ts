import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { KeybindIsPressedEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/KeybindIsPressedEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * AutoBreak module
 *
 * Automatically breaks blocks.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleAutoBreak.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleAutoBreak.kt:35}
 */
export class ModuleAutoBreak extends ClientModule {
    static INSTANCE: ModuleAutoBreak;
    // private keybindIsPressedHandler: EventHook<KeybindIsPressedEvent>;
}