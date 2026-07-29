import type { Continuation } from '../../../../../../../kotlin/coroutines/Continuation.d.ts'
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleAutoConfig.kt#L149 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleAutoConfig.kt:149}
     */
    readonly running: boolean;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    enabledEffect($completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private loadServerConfig(address: string, connectScreen: ConnectScreen | null, $completion: Continuation<void>): any;
}