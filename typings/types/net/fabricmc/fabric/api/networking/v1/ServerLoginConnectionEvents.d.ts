import type { Future } from '../../../../../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { LoginPacketSender } from '../../../../../../net/fabricmc/fabric/api/networking/v1/LoginPacketSender.d.ts'
import type { ServerLoginConnectionEvents$Disconnect } from '../../../../../../net/fabricmc/fabric/api/networking/v1/ServerLoginConnectionEvents$Disconnect.d.ts'
import type { ServerLoginConnectionEvents$Init } from '../../../../../../net/fabricmc/fabric/api/networking/v1/ServerLoginConnectionEvents$Init.d.ts'
import type { ServerLoginConnectionEvents$QueryStart } from '../../../../../../net/fabricmc/fabric/api/networking/v1/ServerLoginConnectionEvents$QueryStart.d.ts'
import type { ServerLoginNetworking$LoginSynchronizer } from '../../../../../../net/fabricmc/fabric/api/networking/v1/ServerLoginNetworking$LoginSynchronizer.d.ts'
import type { MinecraftServer } from '../../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerLoginPacketListenerImpl } from '../../../../../../net/minecraft/server/network/ServerLoginPacketListenerImpl.d.ts'
export class ServerLoginConnectionEvents extends Object {
    static DISCONNECT: Event<(param0: ServerLoginPacketListenerImpl, param1: MinecraftServer) => void>;
    static INIT: Event<(param0: ServerLoginPacketListenerImpl, param1: MinecraftServer) => void>;
    static QUERY_START: Event<(param0: ServerLoginPacketListenerImpl, param1: MinecraftServer, param2: LoginPacketSender, param3: (param0: Future<Object>) => void) => void>;
    private constructor()
}