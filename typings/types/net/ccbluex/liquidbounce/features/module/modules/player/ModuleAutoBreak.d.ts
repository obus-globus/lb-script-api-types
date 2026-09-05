import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { KeybindIsPressedEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/KeybindIsPressedEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * AutoBreak module
 *
 * Automatically breaks blocks.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleAutoBreak.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleAutoBreak.kt:35}
 */
export class ModuleAutoBreak extends ClientModule {
    static INSTANCE: ModuleAutoBreak;
    // private keybindIsPressedHandler: EventHook<KeybindIsPressedEvent>;
}