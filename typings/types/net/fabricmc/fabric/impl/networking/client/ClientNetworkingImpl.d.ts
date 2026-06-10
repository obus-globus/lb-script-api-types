import type { ChannelFutureListener } from '../../../../../../io/netty/channel/ChannelFutureListener.d.ts'
import type { ScopedValue } from '../../../../../../java/lang/ScopedValue.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClientConfigurationNetworking$ConfigurationPayloadHandler } from '../../../../../../net/fabricmc/fabric/api/client/networking/v1/ClientConfigurationNetworking$ConfigurationPayloadHandler.d.ts'
import type { ClientConfigurationNetworking$Context } from '../../../../../../net/fabricmc/fabric/api/client/networking/v1/ClientConfigurationNetworking$Context.d.ts'
import type { ClientLoginNetworking$LoginQueryRequestHandler } from '../../../../../../net/fabricmc/fabric/api/client/networking/v1/ClientLoginNetworking$LoginQueryRequestHandler.d.ts'
import type { ClientPlayNetworking$Context } from '../../../../../../net/fabricmc/fabric/api/client/networking/v1/ClientPlayNetworking$Context.d.ts'
import type { ClientPlayNetworking$PlayPayloadHandler } from '../../../../../../net/fabricmc/fabric/api/client/networking/v1/ClientPlayNetworking$PlayPayloadHandler.d.ts'
import type { GlobalReceiverRegistry } from '../../../../../../net/fabricmc/fabric/impl/networking/GlobalReceiverRegistry.d.ts'
import type { ClientConfigurationNetworkAddon } from '../../../../../../net/fabricmc/fabric/impl/networking/client/ClientConfigurationNetworkAddon.d.ts'
import type { ClientLoginNetworkAddon } from '../../../../../../net/fabricmc/fabric/impl/networking/client/ClientLoginNetworkAddon.d.ts'
import type { ClientPlayNetworkAddon } from '../../../../../../net/fabricmc/fabric/impl/networking/client/ClientPlayNetworkAddon.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientConfigurationPacketListenerImpl } from '../../../../../../net/minecraft/client/multiplayer/ClientConfigurationPacketListenerImpl.d.ts'
import type { ClientHandshakePacketListenerImpl } from '../../../../../../net/minecraft/client/multiplayer/ClientHandshakePacketListenerImpl.d.ts'
import type { ClientPacketListener } from '../../../../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { Connection } from '../../../../../../net/minecraft/network/Connection.d.ts'
import type { FriendlyByteBuf } from '../../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { Packet } from '../../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { ServerCommonPacketListener } from '../../../../../../net/minecraft/network/protocol/common/ServerCommonPacketListener.d.ts'
import type { CustomPacketPayload } from '../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload.d.ts'
export class ClientNetworkingImpl extends Object {
    static CONFIGURATION: GlobalReceiverRegistry<(param0: Object, param1: ClientConfigurationNetworking$Context) => void>;
    static CONNECTION_SCOPED_VALUE: ScopedValue<Connection>;
    static LOGIN: GlobalReceiverRegistry<(param0: Minecraft, param1: ClientHandshakePacketListenerImpl, param2: FriendlyByteBuf, param3: (param0: ChannelFutureListener) => void) => CompletableFuture<FriendlyByteBuf>>;
    static PLAY: GlobalReceiverRegistry<(param0: Object, param1: ClientPlayNetworking$Context) => void>;
    static clientInit(): void;
    static createServerboundPacket(paramarg0: CustomPacketPayload): Packet<ServerCommonPacketListener>;
    static getAddon(paramarg0: ClientConfigurationPacketListenerImpl): ClientConfigurationNetworkAddon;
    static getAddon(paramarg0: ClientHandshakePacketListenerImpl): ClientLoginNetworkAddon;
    static getAddon(paramarg0: ClientPacketListener): ClientPlayNetworkAddon;
    static getClientConfigurationAddon(): ClientConfigurationNetworkAddon;
    static getClientPlayAddon(): ClientPlayNetworkAddon;
    static getLoginConnection(): Connection;
    static setClientConfigurationAddon(paramarg0: ClientConfigurationNetworkAddon): void;
    static setClientPlayAddon(paramarg0: ClientPlayNetworkAddon): void;
    constructor()
}