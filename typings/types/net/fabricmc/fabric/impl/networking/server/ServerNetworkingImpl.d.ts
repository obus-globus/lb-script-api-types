import type { Future } from '../../../../../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PacketSender } from '../../../../../../net/fabricmc/fabric/api/networking/v1/PacketSender.d.ts'
import type { ServerConfigurationNetworking$ConfigurationPacketHandler } from '../../../../../../net/fabricmc/fabric/api/networking/v1/ServerConfigurationNetworking$ConfigurationPacketHandler.d.ts'
import type { ServerConfigurationNetworking$Context } from '../../../../../../net/fabricmc/fabric/api/networking/v1/ServerConfigurationNetworking$Context.d.ts'
import type { ServerLoginNetworking$LoginQueryResponseHandler } from '../../../../../../net/fabricmc/fabric/api/networking/v1/ServerLoginNetworking$LoginQueryResponseHandler.d.ts'
import type { ServerLoginNetworking$LoginSynchronizer } from '../../../../../../net/fabricmc/fabric/api/networking/v1/ServerLoginNetworking$LoginSynchronizer.d.ts'
import type { ServerPlayNetworking$Context } from '../../../../../../net/fabricmc/fabric/api/networking/v1/ServerPlayNetworking$Context.d.ts'
import type { ServerPlayNetworking$PlayPayloadHandler } from '../../../../../../net/fabricmc/fabric/api/networking/v1/ServerPlayNetworking$PlayPayloadHandler.d.ts'
import type { GlobalReceiverRegistry } from '../../../../../../net/fabricmc/fabric/impl/networking/GlobalReceiverRegistry.d.ts'
import type { ServerConfigurationNetworkAddon } from '../../../../../../net/fabricmc/fabric/impl/networking/server/ServerConfigurationNetworkAddon.d.ts'
import type { ServerLoginNetworkAddon } from '../../../../../../net/fabricmc/fabric/impl/networking/server/ServerLoginNetworkAddon.d.ts'
import type { ServerPlayNetworkAddon } from '../../../../../../net/fabricmc/fabric/impl/networking/server/ServerPlayNetworkAddon.d.ts'
import type { FriendlyByteBuf } from '../../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { Packet } from '../../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { ClientCommonPacketListener } from '../../../../../../net/minecraft/network/protocol/common/ClientCommonPacketListener.d.ts'
import type { CustomPacketPayload } from '../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload.d.ts'
import type { MinecraftServer } from '../../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerConfigurationPacketListenerImpl } from '../../../../../../net/minecraft/server/network/ServerConfigurationPacketListenerImpl.d.ts'
import type { ServerGamePacketListenerImpl } from '../../../../../../net/minecraft/server/network/ServerGamePacketListenerImpl.d.ts'
import type { ServerLoginPacketListenerImpl } from '../../../../../../net/minecraft/server/network/ServerLoginPacketListenerImpl.d.ts'
export class ServerNetworkingImpl extends Object {
    static CONFIGURATION: GlobalReceiverRegistry<(param0: Object, param1: ServerConfigurationNetworking$Context) => void>;
    static LOGIN: GlobalReceiverRegistry<(param0: MinecraftServer, param1: ServerLoginPacketListenerImpl, param2: boolean, param3: FriendlyByteBuf, param4: (param0: Future<Object>) => void, param5: PacketSender) => void>;
    static PLAY: GlobalReceiverRegistry<(param0: Object, param1: ServerPlayNetworking$Context) => void>;
    static createClientboundPacket(paramarg0: CustomPacketPayload): Packet<ClientCommonPacketListener>;
    static getAddon(paramarg0: ServerConfigurationPacketListenerImpl): ServerConfigurationNetworkAddon;
    static getAddon(paramarg0: ServerLoginPacketListenerImpl): ServerLoginNetworkAddon;
    static getAddon(paramarg0: ServerGamePacketListenerImpl): ServerPlayNetworkAddon;
    constructor()
}