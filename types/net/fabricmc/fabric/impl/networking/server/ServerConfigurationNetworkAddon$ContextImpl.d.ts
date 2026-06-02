import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PacketSender } from '../../../../../../net/fabricmc/fabric/api/networking/v1/PacketSender.d.ts'
import type { ServerConfigurationNetworking$Context } from '../../../../../../net/fabricmc/fabric/api/networking/v1/ServerConfigurationNetworking$Context.d.ts'
import type { PacketContext } from '../../../../../../net/fabricmc/fabric/api/networking/v1/context/PacketContext.d.ts'
import type { MinecraftServer } from '../../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerConfigurationPacketListenerImpl } from '../../../../../../net/minecraft/server/network/ServerConfigurationPacketListenerImpl.d.ts'
export class ServerConfigurationNetworkAddon$ContextImpl extends Record implements ServerConfigurationNetworking$Context {
    private constructor(server: MinecraftServer, packetListener: ServerConfigurationPacketListenerImpl, responseSender: PacketSender)
    // private packetListener: ServerConfigurationPacketListenerImpl;
    // private responseSender: PacketSender;
    // private server: MinecraftServer;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    packetContext(): PacketContext;
    packetListener(): ServerConfigurationPacketListenerImpl;
    responseSender(): PacketSender;
    server(): MinecraftServer;
    toString(): string;
}