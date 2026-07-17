import type { JavaMap } from '../../../JavaMap.d.ts'
import type { IConnection } from '../../../com/viaversion/viafabricplus/injection/access/core/IConnection.d.ts'
import type { UserConnection } from '../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ProtocolVersion } from '../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { Channel } from '../../../io/netty/channel/Channel.d.ts'
import type { ChannelFuture } from '../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelFutureListener } from '../../../io/netty/channel/ChannelFutureListener.d.ts'
import type { ChannelHandler } from '../../../io/netty/channel/ChannelHandler.d.ts'
import type { ChannelHandlerContext } from '../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { SimpleChannelInboundHandler } from '../../../io/netty/channel/SimpleChannelInboundHandler.d.ts'
import type { InetSocketAddress } from '../../../java/net/InetSocketAddress.d.ts'
import type { SocketAddress } from '../../../java/net/SocketAddress.d.ts'
import type { UUID } from '../../../java/util/UUID.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Cipher } from '../../../javax/crypto/Cipher.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
import type { PacketContext } from '../../../net/fabricmc/fabric/api/networking/v1/context/PacketContext.d.ts'
import type { PacketContextProvider } from '../../../net/fabricmc/fabric/api/networking/v1/context/PacketContextProvider.d.ts'
import type { ChannelInfoHolder } from '../../../net/fabricmc/fabric/impl/networking/ChannelInfoHolder.d.ts'
import type { PacketContextImpl } from '../../../net/fabricmc/fabric/impl/networking/context/PacketContextImpl.d.ts'
import type { SyncedSerializerAwareConnection } from '../../../net/fabricmc/fabric/impl/recipe/sync/SyncedSerializerAwareConnection.d.ts'
import type { BandwidthDebugMonitor } from '../../../net/minecraft/network/BandwidthDebugMonitor.d.ts'
import type { ClientboundPacketListener } from '../../../net/minecraft/network/ClientboundPacketListener.d.ts'
import type { ConnectionProtocol } from '../../../net/minecraft/network/ConnectionProtocol.d.ts'
import type { DisconnectionDetails } from '../../../net/minecraft/network/DisconnectionDetails.d.ts'
import type { PacketListener } from '../../../net/minecraft/network/PacketListener.d.ts'
import type { ProtocolInfo } from '../../../net/minecraft/network/ProtocolInfo.d.ts'
import type { ServerboundPacketListener } from '../../../net/minecraft/network/ServerboundPacketListener.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
import type { Packet } from '../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketFlow } from '../../../net/minecraft/network/protocol/PacketFlow.d.ts'
import type { ClientIntent } from '../../../net/minecraft/network/protocol/handshake/ClientIntent.d.ts'
import type { ClientLoginPacketListener } from '../../../net/minecraft/network/protocol/login/ClientLoginPacketListener.d.ts'
import type { ClientStatusPacketListener } from '../../../net/minecraft/network/protocol/status/ClientStatusPacketListener.d.ts'
import type { EventLoopGroupHolder } from '../../../net/minecraft/server/network/EventLoopGroupHolder.d.ts'
import type { LocalSampleLogger } from '../../../net/minecraft/util/debugchart/LocalSampleLogger.d.ts'
import type { Marker } from '../../../org/slf4j/Marker.d.ts'
export class Connection extends SimpleChannelInboundHandler<Packet<any>> implements IConnection, PacketContextProvider, ChannelInfoHolder, SyncedSerializerAwareConnection {
    static PACKET_MARKER: Marker;
    static PACKET_RECEIVED_MARKER: Marker;
    static PACKET_SENT_MARKER: Marker;
    static ROOT_MARKER: Marker;
    static configureInMemoryPipeline(parampipeline: Map$Entry<string, ChannelHandler>[], parampacketFlow: PacketFlow): void;
    static configureSerialization(parampipeline: Map$Entry<string, ChannelHandler>[], paraminboundDirection: PacketFlow, paramlocal: boolean, parammonitor: BandwidthDebugMonitor): void;
    static connect(paramaddress: InetSocketAddress, parameventLoopGroupHolder: EventLoopGroupHolder, paramconnection: Connection): ChannelFuture;
    static connectToLocalServer(paramaddress: SocketAddress): Connection;
    static connectToServer(paramaddress: InetSocketAddress, parameventLoopGroupHolder: EventLoopGroupHolder, parambandwidthLogger: LocalSampleLogger): Connection;
    static fromChannel(paramchannel: Channel, paramflow: PacketFlow, parambandwidthLogger: LocalSampleLogger): Connection;
    constructor(receiving: PacketFlow)
    // private address: SocketAddress;
    readonly averageReceivedPackets: number;
    readonly averageSentPackets: number;
    bandwidthDebugMonitor: BandwidthDebugMonitor;
    channel: Channel;
    // private delayedDisconnect: DisconnectionDetails;
    // private disconnectListener: PacketListener;
    readonly disconnectionDetails: DisconnectionDetails;
    // private disconnectionHandled: boolean;
    // private handlingFault: boolean;
    readonly intendedProfileId: UUID;
    readonly packetContext: PacketContextImpl;
    readonly packetListener: PacketListener;
    pendingActions: (param0: Connection) => void[];
    // private playChannels: JavaMap<Object | null, Object | null>;
    // private receivedPackets: number;
    readonly receiving: PacketFlow;
    // private sendLoginDisconnect: boolean;
    // private sentPackets: number;
    // private syncedRecipeSerializers: (Object | null)[];
    // private tickCount: number;
    // private viaFabricPlus$decryptionCipher: Cipher;
    // private viaFabricPlus$serverVersion: ProtocolVersion;
    // private viaFabricPlus$userConnection: UserConnection;
    channelActive(ctx: ChannelHandlerContext): void;
    channelInactive(ctx: ChannelHandlerContext): void;
    channelRead0(ctx: ChannelHandlerContext, packet: Packet<any>): void;
    channelRegistered(arg0: ChannelHandlerContext): void;
    configurePacketHandler(pipeline: Map$Entry<string, ChannelHandler>[]): void;
    disconnect(details: DisconnectionDetails): void;
    disconnect(reason: Component): void;
    // private doSendPacket(packet: Packet<any>, listener: ChannelFutureListener, flush: boolean): void;
    exceptionCaught(ctx: ChannelHandlerContext, cause: Throwable): void;
    fabric_getPendingChannelsNames(arg0: ConnectionProtocol): (Object | null)[];
    fabric_getSyncedRecipeSerializers(): (Object | null)[];
    fabric_setSyncedRecipeSerializers(arg0: (Object | null)[]): void;
    // private flush(): void;
    flushChannel(): void;
    // private flushQueue(): void;
    getAverageReceivedPackets(): number;
    getAverageSentPackets(): number;
    getDisconnectionDetails(): DisconnectionDetails;
    getIntendedProfileId(): UUID;
    getLoggableAddress(logIPs: boolean): string;
    getPacketContext(): PacketContext;
    getPacketListener(): PacketListener;
    getReceiving(): PacketFlow;
    getRemoteAddress(): SocketAddress;
    getSending(): PacketFlow;
    handleDisconnection(): void;
    // private initiateServerboundConnection<S extends ServerboundPacketListener, C extends ClientboundPacketListener>(hostName: string, port: number, outbound: ProtocolInfo<S>, inbound: ProtocolInfo<C>, listener: C, intent: ClientIntent): void;
    initiateServerboundPlayConnection<S extends ServerboundPacketListener, C extends ClientboundPacketListener>(hostName: string, port: number, outbound: ProtocolInfo<S>, inbound: ProtocolInfo<C>, listener: C, transfer: boolean): void;
    initiateServerboundPlayConnection(hostName: string, port: number, listener: ClientLoginPacketListener): void;
    initiateServerboundStatusConnection(hostName: string, port: number, listener: ClientStatusPacketListener): void;
    isConnected(): boolean;
    isConnecting(): boolean;
    isMemoryConnection(): boolean;
    runOnceConnected(action: (param0: Connection) => void): void;
    send(packet: Packet<any>): void;
    send(packet: Packet<any>, listener: ChannelFutureListener): void;
    send(packet: Packet<any>, listener: ChannelFutureListener, flush: boolean): void;
    // private sendPacket(packet: Packet<any>, listener: ChannelFutureListener, flush: boolean): void;
    setBandwidthLogger(bandwidthLogger: LocalSampleLogger): void;
    setEncryptionKey(decryptCipher: Cipher, encryptCipher: Cipher): void;
    setIntendedProfileId(profileId: UUID): void;
    setListenerForServerboundHandshake(packetListener: PacketListener): void;
    setReadOnly(): void;
    setupCompression(threshold: number, validateDecompressed: boolean): void;
    setupInboundProtocol<T extends PacketListener>(protocol: ProtocolInfo<T>, packetListener: T): void;
    setupOutboundProtocol(protocol: ProtocolInfo<any>): void;
    tick(): void;
    tickSecond(): void;
    userEventTriggered(arg0: ChannelHandlerContext, arg1: Object): void;
    // private validateListener(protocol: ProtocolInfo<any>, packetListener: PacketListener): void;
    viaFabricPlus$getTargetVersion(): ProtocolVersion;
    viaFabricPlus$getUserConnection(): UserConnection;
    viaFabricPlus$setTargetVersion(arg0: ProtocolVersion): void;
    viaFabricPlus$setUserConnection(arg0: UserConnection): void;
    viaFabricPlus$setupPreNettyDecryption(): void;
}