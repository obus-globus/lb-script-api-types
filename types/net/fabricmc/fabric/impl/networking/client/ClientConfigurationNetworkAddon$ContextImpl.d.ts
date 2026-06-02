import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClientConfigurationNetworking$Context } from '../../../../../../net/fabricmc/fabric/api/client/networking/v1/ClientConfigurationNetworking$Context.d.ts'
import type { PacketSender } from '../../../../../../net/fabricmc/fabric/api/networking/v1/PacketSender.d.ts'
import type { PacketContext } from '../../../../../../net/fabricmc/fabric/api/networking/v1/context/PacketContext.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientConfigurationPacketListenerImpl } from '../../../../../../net/minecraft/client/multiplayer/ClientConfigurationPacketListenerImpl.d.ts'
export class ClientConfigurationNetworkAddon$ContextImpl extends Record implements ClientConfigurationNetworking$Context {
    private constructor(client: Minecraft, packetListener: ClientConfigurationPacketListenerImpl, responseSender: PacketSender)
    // private client: Minecraft;
    // private packetListener: ClientConfigurationPacketListenerImpl;
    // private responseSender: PacketSender;
    client(): Minecraft;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    packetContext(): PacketContext;
    packetListener(): ClientConfigurationPacketListenerImpl;
    responseSender(): PacketSender;
    toString(): string;
}