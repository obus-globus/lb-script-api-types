import type { Channel } from '../../../../../../io/netty/channel/Channel.d.ts'
import type { ChannelFuture } from '../../../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelHandler } from '../../../../../../io/netty/channel/ChannelHandler.d.ts'
import type { InetSocketAddress } from '../../../../../../java/net/InetSocketAddress.d.ts'
import type { SocketAddress } from '../../../../../../java/net/SocketAddress.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
import type { BandwidthDebugMonitor } from '../../../../../../net/minecraft/network/BandwidthDebugMonitor.d.ts'
import type { Connection } from '../../../../../../net/minecraft/network/Connection.d.ts'
import type { PacketFlow } from '../../../../../../net/minecraft/network/protocol/PacketFlow.d.ts'
import type { EventLoopGroupHolder } from '../../../../../../net/minecraft/server/network/EventLoopGroupHolder.d.ts'
import type { LocalSampleLogger } from '../../../../../../net/minecraft/util/debugchart/LocalSampleLogger.d.ts'
import type { Marker } from '../../../../../../org/slf4j/Marker.d.ts'
export class FakePlayerPacketListener$FakeConnection extends Connection {
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
    private constructor()
}