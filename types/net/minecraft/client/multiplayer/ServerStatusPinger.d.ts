import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ServerData } from '../../../../net/minecraft/client/multiplayer/ServerData.d.ts'
import type { ServerAddress } from '../../../../net/minecraft/client/multiplayer/resolver/ServerAddress.d.ts'
import type { Connection } from '../../../../net/minecraft/network/Connection.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { EventLoopGroupHolder } from '../../../../net/minecraft/server/network/EventLoopGroupHolder.d.ts'
export class ServerStatusPinger extends Object {
    static formatPlayerCount(paramcurPlayers: number, parammaxPlayers: number): Component;
    constructor()
    // private connections: Connection[];
    // private onPingFailed(reason: Component, data: ServerData): void;
    pingLegacyServer(arg0: InetSocketAddress, arg1: ServerAddress, arg2: ServerData, arg3: EventLoopGroupHolder): void;
    pingServer(data: ServerData, onPersistentDataChange: () => void, onPongResponse: () => void, eventLoopGroupHolder: EventLoopGroupHolder): void;
    removeAll(): void;
    tick(): void;
}