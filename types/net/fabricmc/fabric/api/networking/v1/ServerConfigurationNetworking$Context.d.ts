import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PacketSender } from '../../../../../../net/fabricmc/fabric/api/networking/v1/PacketSender.d.ts'
import type { PacketContext } from '../../../../../../net/fabricmc/fabric/api/networking/v1/context/PacketContext.d.ts'
import type { MinecraftServer } from '../../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerConfigurationPacketListenerImpl } from '../../../../../../net/minecraft/server/network/ServerConfigurationPacketListenerImpl.d.ts'
export interface ServerConfigurationNetworking$Context extends Object{
    packetContext(): PacketContext;
    packetListener(): ServerConfigurationPacketListenerImpl;
    responseSender(): PacketSender;
    server(): MinecraftServer;
}