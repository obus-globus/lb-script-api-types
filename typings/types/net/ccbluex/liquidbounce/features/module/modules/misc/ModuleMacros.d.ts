import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { KeyEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/KeyEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleMacros$Macro } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/ModuleMacros$Macro.d.ts'
/**
 * Macros module
 *
 * Lets you execute chat messages or item actions using custom keybinds.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleMacros.kt#L50 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleMacros.kt:50}
 */
export class ModuleMacros extends ClientModule {
    static INSTANCE: ModuleMacros;
    // private COUNT: number;
    // private keyboardKeyHandler: EventHook<KeyEvent>;
    // private macros: ModuleMacros$Macro[];
    onDisabled(): void;
}