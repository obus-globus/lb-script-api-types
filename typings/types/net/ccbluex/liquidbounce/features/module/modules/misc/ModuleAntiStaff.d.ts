import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { ServerConnectEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/ServerConnectEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Notifies you about staff actions.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleAntiStaff.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleAntiStaff.kt:44}
 */
export class ModuleAntiStaff extends ClientModule {
    static INSTANCE: ModuleAntiStaff;
    readonly handleServerConnect: EventHook<ServerConnectEvent>;
    // private packetHandler: EventHook<PacketEvent>;
    // private serverStaffList: { [key: string]: string[] };
    // private showInTabList: boolean;
    // private /*not mapped: */ getShowInTabList(): boolean;
    // private alert(key: string, username: string | null): void;
    enabledEffect(): void;
    // private isStaff(username: string): boolean;
    loadStaffList(address: string): void;
    shouldShowAsStaffOnTab(username: string): boolean;
}