import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { KeyEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/KeyEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleMacros$Macro } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/ModuleMacros$Macro.d.ts'
/**
 * Macros module
 *
 * Lets you execute chat messages or item actions using custom keybinds.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8fc1f12b34c50f483c3b3446c45e8bc1de58e20c/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleMacros.kt#L48 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleMacros.kt:48}
 */
export class ModuleMacros extends ClientModule {
    static INSTANCE: ModuleMacros;
    // private COUNT: number;
    // private keyboardKeyHandler: EventHook<KeyEvent>;
    // private macros: ModuleMacros$Macro[];
    onDisabled(): void;
}