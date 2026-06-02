import type { ChannelFutureListener } from '../../../../../../io/netty/channel/ChannelFutureListener.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { ClientLoginNetworking$LoginQueryRequestHandler } from '../../../../../../net/fabricmc/fabric/api/client/networking/v1/ClientLoginNetworking$LoginQueryRequestHandler.d.ts'
import type { AbstractNetworkAddon } from '../../../../../../net/fabricmc/fabric/impl/networking/AbstractNetworkAddon.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientHandshakePacketListenerImpl } from '../../../../../../net/minecraft/client/multiplayer/ClientHandshakePacketListenerImpl.d.ts'
import type { FriendlyByteBuf } from '../../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { ClientboundCustomQueryPacket } from '../../../../../../net/minecraft/network/protocol/login/ClientboundCustomQueryPacket.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class ClientLoginNetworkAddon extends AbstractNetworkAddon<(param0: Minecraft, param1: ClientHandshakePacketListenerImpl, param2: FriendlyByteBuf, param3: (param0: ChannelFutureListener) => void) => java.util.concurrent.CompletableFuture<net.minecraft.network.FriendlyByteBuf>> {
    constructor(arg0: ClientHandshakePacketListenerImpl, arg1: Minecraft)
    // private client: Minecraft;
    // private firstResponse: boolean;
    // private listener: ClientHandshakePacketListenerImpl;
    // private handlePacket(arg0: number, arg1: Identifier, arg2: FriendlyByteBuf): boolean;
    handlePacket(arg0: ClientboundCustomQueryPacket): boolean;
    handleRegistration(arg0: Identifier): void;
    handleUnregistration(arg0: Identifier): void;
    invokeDisconnectEvent(): void;
    invokeInitEvent(): void;
    isReservedChannel(arg0: Identifier): boolean;
}