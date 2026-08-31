import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { BrowserReadyEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/BrowserReadyEvent.d.ts'
import type { DisconnectEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/DisconnectEvent.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { WorldChangeEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { CustomStandaloneMinecraftScreen } from '../../../../../../../net/ccbluex/liquidbounce/integration/screen/impl/CustomStandaloneMinecraftScreen.d.ts'
/**
 * ClickGUI module
 *
 * Shows you an easy-to-use menu to toggle and configure modules.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleClickGui.kt#L51 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleClickGui.kt:51}
 */
export class ModuleClickGui extends ClientModule {
    static INSTANCE: ModuleClickGui;
    // private browserReadyHandler: EventHook<BrowserReadyEvent>;
    // private disconnectHandler: EventHook<DisconnectEvent>;
    /*not mapped: */ isInSearchBar(): boolean;
    readonly running: boolean;
    // private scale: number;
    // private /*not mapped: */ getScale(): number;
    // private searchBarAutoFocus: boolean;
    // private /*not mapped: */ getSearchBarAutoFocus(): boolean;
    // private standaloneScreen: CustomStandaloneMinecraftScreen | null;
    // private tickHandler: EventHook<GameTickEvent>;
    // private useStandaloneScreen: boolean;
    // private /*not mapped: */ getUseStandaloneScreen(): boolean;
    // private worldChangeHandler: EventHook<WorldChangeEvent>;
    invalidate(): void;
    onEnabled(): void;
    sync(): void;
    updateStandaloneScreen(): boolean;
}