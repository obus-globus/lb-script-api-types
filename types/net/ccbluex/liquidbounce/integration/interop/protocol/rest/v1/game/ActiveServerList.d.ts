import type { Future } from '../../../../../../../../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ScreenEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/ScreenEvent.d.ts'
import type { ServerData } from '../../../../../../../../../net/minecraft/client/multiplayer/ServerData.d.ts'
import type { ServerList } from '../../../../../../../../../net/minecraft/client/multiplayer/ServerList.d.ts'
import type { ServerStatusPinger } from '../../../../../../../../../net/minecraft/client/multiplayer/ServerStatusPinger.d.ts'
import type { MutableComponent } from '../../../../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class ActiveServerList extends Object implements EventListener {
    static INSTANCE: ActiveServerList;
    // private cannotConnectText: MutableComponent;
    // private cannotResolveText: MutableComponent;
    // private pingTasks: Future<Object>[];
    readonly running: boolean;
    // private screenHandler: EventHook<ScreenEvent>;
    // private serverList: ServerList;
    /*not mapped: */ getServerList$liquidbounce(): ServerList;
    // private serverListPinger: ServerStatusPinger;
    // private tickHandler: EventHook<GameTickEvent>;
    // private cancelTasks(): void;
    children(): EventListener[];
    parent(): EventListener | null;
    ping(serverEntry: ServerData): void;
    pingThemAll(): void;
    unregister(): void;
}