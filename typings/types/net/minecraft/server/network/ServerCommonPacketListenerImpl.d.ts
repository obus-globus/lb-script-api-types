import type { GameProfile } from '../../../../com/mojang/authlib/GameProfile.d.ts'
import type { ChannelFutureListener } from '../../../../io/netty/channel/ChannelFutureListener.d.ts'
import type { Exception } from '../../../../java/lang/Exception.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PacketContext } from '../../../../net/fabricmc/fabric/api/networking/v1/context/PacketContext.d.ts'
import type { PacketContextProvider } from '../../../../net/fabricmc/fabric/api/networking/v1/context/PacketContextProvider.d.ts'
import type { PacketListenerExtensions } from '../../../../net/fabricmc/fabric/impl/networking/PacketListenerExtensions.d.ts'
import type { ServerCommonPacketListenerImplAccessor } from '../../../../net/fabricmc/fabric/mixin/networking/accessor/ServerCommonPacketListenerImplAccessor.d.ts'
import type { ServerCommonPacketListenerImplAccessor as ServerCommonPacketListenerImplAccessor_2 } from '../../../../net/fabricmc/fabric/mixin/recipe/sync/ServerCommonPacketListenerImplAccessor.d.ts'
import type { Connection } from '../../../../net/minecraft/network/Connection.d.ts'
import type { ConnectionProtocol } from '../../../../net/minecraft/network/ConnectionProtocol.d.ts'
import type { DisconnectionDetails } from '../../../../net/minecraft/network/DisconnectionDetails.d.ts'
import type { PacketListener } from '../../../../net/minecraft/network/PacketListener.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { Packet } from '../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { ServerCommonPacketListener } from '../../../../net/minecraft/network/protocol/common/ServerCommonPacketListener.d.ts'
import type { ServerboundClientInformationPacket } from '../../../../net/minecraft/network/protocol/common/ServerboundClientInformationPacket.d.ts'
import type { ServerboundCustomClickActionPacket } from '../../../../net/minecraft/network/protocol/common/ServerboundCustomClickActionPacket.d.ts'
import type { ServerboundCustomPayloadPacket } from '../../../../net/minecraft/network/protocol/common/ServerboundCustomPayloadPacket.d.ts'
import type { ServerboundKeepAlivePacket } from '../../../../net/minecraft/network/protocol/common/ServerboundKeepAlivePacket.d.ts'
import type { ServerboundPongPacket } from '../../../../net/minecraft/network/protocol/common/ServerboundPongPacket.d.ts'
import type { ServerboundResourcePackPacket } from '../../../../net/minecraft/network/protocol/common/ServerboundResourcePackPacket.d.ts'
import type { ServerboundCookieResponsePacket } from '../../../../net/minecraft/network/protocol/cookie/ServerboundCookieResponsePacket.d.ts'
import type { MinecraftServer } from '../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ClientInformation } from '../../../../net/minecraft/server/level/ClientInformation.d.ts'
import type { CommonListenerCookie } from '../../../../net/minecraft/server/network/CommonListenerCookie.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export abstract class ServerCommonPacketListenerImpl extends Object implements PacketContextProvider, PacketListenerExtensions, ServerCommonPacketListenerImplAccessor, ServerCommonPacketListenerImplAccessor_2, ServerCommonPacketListener {
    static LATENCY_CHECK_INTERVAL: number;
    static LOGGER: Logger;
    constructor(server: MinecraftServer, connection: Connection, cookie: CommonListenerCookie)
    // private closed: boolean;
    // private closedListenerTime: number;
    readonly connection: Connection;
    // private keepAliveChallenge: number;
    // private keepAlivePending: boolean;
    // private keepAliveTime: number;
    // private latency: number;
    readonly server: MinecraftServer;
    // private suspendFlushingOnServerThread: boolean;
    // private transferred: boolean;
    // private checkIfClosed(now: number): boolean;
    // private close(): void;
    createCookie(clientInformation: ClientInformation): CommonListenerCookie;
    disconnect(details: DisconnectionDetails): void;
    disconnect(reason: Component): void;
    getConnection(): Connection;
    getOwner(): GameProfile;
    getPacketContext(): PacketContext;
    getServer(): MinecraftServer;
    handleClientInformation(packet: ServerboundClientInformationPacket): void;
    handleCookieResponse(packet: ServerboundCookieResponsePacket): void;
    handleCustomClickAction(packet: ServerboundCustomClickActionPacket): void;
    handleCustomPayload(packet: ServerboundCustomPayloadPacket): void;
    handleKeepAlive(packet: ServerboundKeepAlivePacket): void;
    handlePong(serverboundPongPacket: ServerboundPongPacket): void;
    handleResourcePackResponse(packet: ServerboundResourcePackPacket): void;
    isAcceptingMessages(): boolean;
    isSingleplayerOwner(): boolean;
    keepConnectionAlive(): void;
    latency(): number;
    onDisconnect(details: DisconnectionDetails): void;
    onPacketError(packet: Packet<PacketListener>, e: Exception): void;
    playerProfile(): GameProfile;
    protocol(): ConnectionProtocol;
    resumeFlushing(): void;
    send(packet: Packet<Object>): void;
    send(packet: Packet<Object>, listener: ChannelFutureListener): void;
    suspendFlushing(): void;
}