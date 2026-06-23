import type { ChannelFutureListener } from '../../../../../../io/netty/channel/ChannelFutureListener.d.ts'
import type { Future } from '../../../../../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LoginPacketSender } from '../../../../../../net/fabricmc/fabric/api/networking/v1/LoginPacketSender.d.ts'
import type { PacketSender } from '../../../../../../net/fabricmc/fabric/api/networking/v1/PacketSender.d.ts'
import type { ServerLoginNetworking$LoginQueryResponseHandler } from '../../../../../../net/fabricmc/fabric/api/networking/v1/ServerLoginNetworking$LoginQueryResponseHandler.d.ts'
import type { ServerLoginNetworking$LoginSynchronizer } from '../../../../../../net/fabricmc/fabric/api/networking/v1/ServerLoginNetworking$LoginSynchronizer.d.ts'
import type { AbstractNetworkAddon } from '../../../../../../net/fabricmc/fabric/impl/networking/AbstractNetworkAddon.d.ts'
import type { QueryIdFactory } from '../../../../../../net/fabricmc/fabric/impl/networking/server/QueryIdFactory.d.ts'
import type { Connection } from '../../../../../../net/minecraft/network/Connection.d.ts'
import type { FriendlyByteBuf } from '../../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Packet } from '../../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { CustomPacketPayload } from '../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload.d.ts'
import type { ClientboundCustomQueryPacket } from '../../../../../../net/minecraft/network/protocol/login/ClientboundCustomQueryPacket.d.ts'
import type { ServerboundCustomQueryAnswerPacket } from '../../../../../../net/minecraft/network/protocol/login/ServerboundCustomQueryAnswerPacket.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { MinecraftServer } from '../../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerLoginPacketListenerImpl } from '../../../../../../net/minecraft/server/network/ServerLoginPacketListenerImpl.d.ts'
export class ServerLoginNetworkAddon extends AbstractNetworkAddon<(param0: MinecraftServer, param1: ServerLoginPacketListenerImpl, param2: boolean, param3: FriendlyByteBuf, param4: (param0: Future<Object>) => void, param5: PacketSender) => void> implements LoginPacketSender {
    constructor(arg0: ServerLoginPacketListenerImpl)
    // private channels: { [key: number]: Identifier };
    // private connection: Connection;
    // private firstQueryTick: boolean;
    // private listener: ServerLoginPacketListenerImpl;
    // private queryIdFactory: QueryIdFactory;
    // private server: MinecraftServer;
    // private waits: Future<Object>[];
    createPacket(arg0: CustomPacketPayload): Packet<any>;
    createPacket(arg0: Identifier, arg1: FriendlyByteBuf): Packet<any>;
    disconnect(arg0: Component): void;
    // private handle(arg0: number, arg1: FriendlyByteBuf): boolean;
    handle(arg0: ServerboundCustomQueryAnswerPacket): boolean;
    handleRegistration(arg0: Identifier): void;
    handleUnregistration(arg0: Identifier): void;
    invokeDisconnectEvent(): void;
    invokeInitEvent(): void;
    isReservedChannel(arg0: Identifier): boolean;
    queryTick(): boolean;
    registerOutgoingPacket(arg0: ClientboundCustomQueryPacket): void;
    // private sendCompressionPacket(): void;
    sendPacket(arg0: Identifier, arg1: FriendlyByteBuf): void;
    sendPacket(arg0: Identifier, arg1: FriendlyByteBuf, arg2: ChannelFutureListener): void;
    sendPacket(arg0: Packet<any>): void;
    sendPacket(arg0: Packet<any>, arg1: ChannelFutureListener): void;
    sendPacket(arg0: CustomPacketPayload): void;
    sendPacket(arg0: CustomPacketPayload, arg1: ChannelFutureListener): void;
}