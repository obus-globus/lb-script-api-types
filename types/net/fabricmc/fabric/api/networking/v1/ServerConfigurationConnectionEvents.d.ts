import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { ServerConfigurationConnectionEvents$Configure } from '../../../../../../net/fabricmc/fabric/api/networking/v1/ServerConfigurationConnectionEvents$Configure.d.ts'
import type { ServerConfigurationConnectionEvents$Disconnect } from '../../../../../../net/fabricmc/fabric/api/networking/v1/ServerConfigurationConnectionEvents$Disconnect.d.ts'
import type { MinecraftServer } from '../../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerConfigurationPacketListenerImpl } from '../../../../../../net/minecraft/server/network/ServerConfigurationPacketListenerImpl.d.ts'
export class ServerConfigurationConnectionEvents extends Object {
    static BEFORE_CONFIGURE: Event<(param0: ServerConfigurationPacketListenerImpl, param1: MinecraftServer) => void>;
    static CONFIGURE: Event<(param0: ServerConfigurationPacketListenerImpl, param1: MinecraftServer) => void>;
    static DISCONNECT: Event<(param0: ServerConfigurationPacketListenerImpl, param1: MinecraftServer) => void>;
    private constructor()
}