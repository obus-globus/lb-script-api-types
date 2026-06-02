import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MinecraftServer } from '../../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerConfigurationPacketListenerImpl } from '../../../../../../net/minecraft/server/network/ServerConfigurationPacketListenerImpl.d.ts'
export interface ServerConfigurationConnectionEvents$Disconnect extends Object{
    onConfigureDisconnect(arg0: ServerConfigurationPacketListenerImpl, arg1: MinecraftServer): void;
}