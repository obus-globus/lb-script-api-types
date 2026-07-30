import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Continuation } from '../../../../../../../kotlin/coroutines/Continuation.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { ServerConnectEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/ServerConnectEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Notifies you about staff actions.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleAntiStaff.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleAntiStaff.kt:44}
 */
export class ModuleAntiStaff extends ClientModule {
    static INSTANCE: ModuleAntiStaff;
    readonly handleServerConnect: EventHook<ServerConnectEvent>;
    // private packetHandler: EventHook<PacketEvent>;
    // private serverStaffList: JavaMap<string, string[]>;
    // private showInTabList: boolean;
    // private /*not mapped: */ getShowInTabList(): boolean;
    // private alert(key: string, username: string | null): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    enabledEffect($completion: Continuation<void>): any;
    // private isStaff(username: string): boolean;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    loadStaffList(address: string, $completion: Continuation<void>): any;
    shouldShowAsStaffOnTab(username: string): boolean;
}