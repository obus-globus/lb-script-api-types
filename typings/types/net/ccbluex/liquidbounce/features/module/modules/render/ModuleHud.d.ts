import type { ValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { BrowserReadyEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/BrowserReadyEvent.d.ts'
import type { DisconnectEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/DisconnectEvent.d.ts'
import type { ScreenEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/ScreenEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { CustomOverlay } from '../../../../../../../net/ccbluex/liquidbounce/integration/screen/impl/CustomOverlay.d.ts'
import type { Screen } from '../../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
/**
 * Module HUD
 *
 * The client in-game dashboard.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e56f181853dc858654c9fc909afec417d274473d/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleHud.kt#L55 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleHud.kt:55}
 */
export class ModuleHud extends ClientModule {
    static INSTANCE: ModuleHud;
    readonly baseKey: string;
    // private browserReadyHandler: EventHook<BrowserReadyEvent>;
    readonly components: ValueGroup;
    // private disconnectHandler: EventHook<DisconnectEvent>;
    hudEditorSelected: boolean;
    /*not mapped: */ isBlurEffectActive(): boolean;
    // private /*not mapped: */ isVisible(): boolean;
    // private overlay: CustomOverlay;
    readonly running: boolean;
    // private screenHandler: EventHook<ScreenEvent>;
    // private spaceSeperatedNames: boolean;
    // private /*not mapped: */ getSpaceSeperatedNames(): boolean;
    readonly themes: ValueGroup;
    // private isClickGuiScreen(screen: Screen | null): boolean;
    onDisabled(): void;
    onEnabled(): void;
    reopen(): void;
    // private shouldShowOverlay(screen: Screen | null): boolean;
    // private updateOverlayVisibility(screen: Screen | null): void;
    /**
     * Updates {@link themes} content
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e56f181853dc858654c9fc909afec417d274473d/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleHud.kt#L130 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleHud.kt:130}
     */
    updateThemes(): void;
}