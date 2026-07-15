import type { JsonObject } from '../../../../../../../../../com/google/gson/JsonObject.d.ts'
import type { Future } from '../../../../../../../../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { ClientShutdownEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/ClientShutdownEvent.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ScreenEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/ScreenEvent.d.ts'
import type { ServerData } from '../../../../../../../../../net/minecraft/client/multiplayer/ServerData.d.ts'
import type { ServerList } from '../../../../../../../../../net/minecraft/client/multiplayer/ServerList.d.ts'
import type { ServerStatusPinger } from '../../../../../../../../../net/minecraft/client/multiplayer/ServerStatusPinger.d.ts'
import type { LanServerDetection$LanServerDetector } from '../../../../../../../../../net/minecraft/client/server/LanServerDetection$LanServerDetector.d.ts'
import type { LanServerDetection$LanServerList } from '../../../../../../../../../net/minecraft/client/server/LanServerDetection$LanServerList.d.ts'
import type { MutableComponent } from '../../../../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class ActiveServerList extends Object implements EventListener {
    static INSTANCE: ActiveServerList;
    // private cannotConnectText: MutableComponent;
    // private cannotResolveText: MutableComponent;
    // private lanDetector: LanServerDetection$LanServerDetector | null;
    // private lanServerList: LanServerDetection$LanServerList;
    // private lanServers: { [key: string]: ServerData };
    // private lastLanPingTime: number;
    // private pingTasks: Future<Object>[];
    readonly running: boolean;
    // private screenHandler: EventHook<ScreenEvent>;
    // private serverList: ServerList;
    /*not mapped: */ getServerList$net_ccbluex_liquidbounce(): ServerList;
    // private serverListPinger: ServerStatusPinger;
    // private shutdownHandler: EventHook<ClientShutdownEvent>;
    // private tickHandler: EventHook<GameTickEvent>;
    // private cancelTasks(): void;
    children(): EventListener[];
    /**
     * Returns the list of currently detected LAN servers with full Server-compatible JSON fields.
     * Mirrors vanilla's updateNetworkServers pattern: takeDirtyServers returns full list → full replacement.
     * Uses negative IDs (sorted by address) to avoid collision with regular server IDs.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/integration/interop/protocol/rest/v1/game/ServerListFunctions.kt#L236 | src/main/kotlin/net/ccbluex/liquidbounce/integration/interop/protocol/rest/v1/game/ServerListFunctions.kt:236}
     */
    getLanServers(): JsonObject[];
    // private maybeRePingLanServers(): void;
    parent(): EventListener | null;
    ping(serverEntry: ServerData): void;
    pingThemAll(): void;
    // private startLanDetection(): void;
    // private stopLanDetection(): void;
    unregister(): void;
}