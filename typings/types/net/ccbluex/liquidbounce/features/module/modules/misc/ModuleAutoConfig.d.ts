import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { ServerConnectEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/ServerConnectEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ConnectScreen } from '../../../../../../../net/minecraft/client/gui/screens/ConnectScreen.d.ts'
export class ModuleAutoConfig extends ClientModule {
    static INSTANCE: ModuleAutoConfig;
    // private blacklistedServer: string[];
    // private handleServerConnect: EventHook<ServerConnectEvent>;
    // private isScheduled: boolean;
    /**
     * Overwrites the condition requirement for being in-game
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e73028e2d505b1129c66eaed525374f04a646764/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleAutoConfig.kt#L149 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleAutoConfig.kt:149}
     */
    readonly running: boolean;
    enabledEffect(): void;
    // private loadServerConfig(address: string, connectScreen: ConnectScreen | null): void;
}