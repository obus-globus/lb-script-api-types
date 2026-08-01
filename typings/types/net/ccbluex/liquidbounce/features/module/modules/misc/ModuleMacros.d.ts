import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { KeyEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/KeyEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleMacros$Macro } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/ModuleMacros$Macro.d.ts'
/**
 * Macros module
 *
 * Lets you execute chat messages or item actions using custom keybinds.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleMacros.kt#L48 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleMacros.kt:48}
 */
export class ModuleMacros extends ClientModule {
    static INSTANCE: ModuleMacros;
    // private COUNT: number;
    // private keyboardKeyHandler: EventHook<KeyEvent>;
    // private macros: ModuleMacros$Macro[];
    onDisabled(): void;
}