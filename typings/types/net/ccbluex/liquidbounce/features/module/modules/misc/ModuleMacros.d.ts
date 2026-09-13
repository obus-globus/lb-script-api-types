import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { KeyEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/KeyEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleMacros$Macro } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/ModuleMacros$Macro.d.ts'
/**
 * Macros module
 *
 * Lets you execute chat messages or item actions using custom keybinds.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6442c02e147c8fd9657f94f1554f63e786c2a3c0/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleMacros.kt#L50 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleMacros.kt:50}
 */
export class ModuleMacros extends ClientModule {
    static INSTANCE: ModuleMacros;
    // private COUNT: number;
    // private keyboardKeyHandler: EventHook<KeyEvent>;
    // private macros: ModuleMacros$Macro[];
    onDisabled(): void;
}