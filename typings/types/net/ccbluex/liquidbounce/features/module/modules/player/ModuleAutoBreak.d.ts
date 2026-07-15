import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { KeybindIsPressedEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/KeybindIsPressedEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * AutoBreak module
 *
 * Automatically breaks blocks.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleAutoBreak.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleAutoBreak.kt:35}
 */
export class ModuleAutoBreak extends ClientModule {
    static INSTANCE: ModuleAutoBreak;
    // private keybindIsPressedHandler: EventHook<KeybindIsPressedEvent>;
}