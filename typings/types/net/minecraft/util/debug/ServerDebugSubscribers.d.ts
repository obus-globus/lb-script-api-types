import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Packet } from '../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { MinecraftServer } from '../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { DebugSubscription } from '../../../../net/minecraft/util/debug/DebugSubscription.d.ts'
export class ServerDebugSubscribers extends Object {
    constructor(server: MinecraftServer)
    // private enabledSubscriptions: JavaMap<DebugSubscription<Object>, ServerPlayer[]>;
    // private server: MinecraftServer;
    broadcastToAll(subscription: DebugSubscription<Object>, packet: Packet<any>): void;
    enabledSubscriptions(): DebugSubscription<Object>[];
    // private getSubscribersFor(subscription: DebugSubscription<Object>): ServerPlayer[];
    hasAnySubscriberFor(subscription: DebugSubscription<Object>): boolean;
    hasRequiredPermissions(player: ServerPlayer): boolean;
    tick(): void;
}