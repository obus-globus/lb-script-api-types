import type { JsonObject } from '../../../../../../../../../com/google/gson/JsonObject.d.ts'
import type { Future } from '../../../../../../../../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../../../../../../kotlin/coroutines/Continuation.d.ts'
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
import type { Component } from '../../../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class ActiveServerList extends Object implements EventListener {
    static INSTANCE: ActiveServerList;
    // private cannotConnectText: MutableComponent;
    // private cannotResolveText: MutableComponent;
    readonly debugDisplayName: Component;
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
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    getLanServers($completion: Continuation<JsonObject[]>): any;
    // private maybeRePingLanServers(): void;
    parent(): EventListener | null;
    ping(serverEntry: ServerData): void;
    pingThemAll(): void;
    // private startLanDetection(): void;
    // private stopLanDetection(): void;
    unregister(): void;
}