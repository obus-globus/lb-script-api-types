import type { ValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { BrowserReadyEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/BrowserReadyEvent.d.ts'
import type { DisconnectEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/DisconnectEvent.d.ts'
import type { ScreenEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/ScreenEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { CustomOverlay } from '../../../../../../../net/ccbluex/liquidbounce/integration/screen/impl/CustomOverlay.d.ts'
/**
 * Module HUD
 *
 * The client in-game dashboard.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleHud.kt#L52 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleHud.kt:52}
 */
export class ModuleHud extends ClientModule {
    static INSTANCE: ModuleHud;
    readonly baseKey: string;
    // private browserReadyHandler: EventHook<BrowserReadyEvent>;
    readonly components: ValueGroup;
    // private disconnectHandler: EventHook<DisconnectEvent>;
    /*not mapped: */ isBlurEffectActive(): boolean;
    // private /*not mapped: */ isVisible(): boolean;
    // private overlay: CustomOverlay;
    readonly running: boolean;
    // private screenHandler: EventHook<ScreenEvent>;
    // private spaceSeperatedNames: boolean;
    // private /*not mapped: */ getSpaceSeperatedNames(): boolean;
    readonly themes: ValueGroup;
    onDisabled(): void;
    onEnabled(): void;
    reopen(): void;
    /**
     * Updates {@link themes} content
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleHud.kt#L96 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleHud.kt:96}
     */
    updateThemes(): void;
}