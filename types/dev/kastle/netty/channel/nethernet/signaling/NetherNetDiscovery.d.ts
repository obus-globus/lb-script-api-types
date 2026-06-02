import type { NetherNetServerSignaling$NewConnectionHandler } from '../../../../../../dev/kastle/netty/channel/nethernet/signaling/NetherNetServerSignaling$NewConnectionHandler.d.ts'
import type { NetherNetServerSignaling$PongData } from '../../../../../../dev/kastle/netty/channel/nethernet/signaling/NetherNetServerSignaling$PongData.d.ts'
import type { NetherNetSignaling$SignalHandler } from '../../../../../../dev/kastle/netty/channel/nethernet/signaling/NetherNetSignaling$SignalHandler.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Channel } from '../../../../../../io/netty/channel/Channel.d.ts'
import type { ChannelHandlerContext } from '../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { SimpleChannelInboundHandler } from '../../../../../../io/netty/channel/SimpleChannelInboundHandler.d.ts'
import type { DatagramPacket } from '../../../../../../io/netty/channel/socket/DatagramPacket.d.ts'
import type { ScheduledFuture } from '../../../../../../io/netty/util/concurrent/ScheduledFuture.d.ts'
import type { InetSocketAddress } from '../../../../../../java/net/InetSocketAddress.d.ts'
import type { BiConsumer } from '../../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class NetherNetDiscovery extends SimpleChannelInboundHandler<DatagramPacket> {
    constructor(arg0: number)
    // private channel: Channel;
    // private discoveryCallback: (param0: number, param1: ByteBuf) => void;
    // private networkId: number;
    readonly newConnectionHandler: (param0: number, param1: string, param2: string) => void;
    // private peerAddresses: { [key: number]: InetSocketAddress };
    readonly pongData: number[];
    // private signalHandlers: { [key: number]: (param0: string) => void };
    bind(): void;
    bind(arg0: InetSocketAddress): void;
    bind(arg0: number): void;
    channelRead0(arg0: ChannelHandlerContext, arg1: DatagramPacket): void;
    close(): void;
    // private handleMessage(arg0: ByteBuf, arg1: number): void;
    // private handleRequest(arg0: number, arg1: InetSocketAddress): void;
    isActive(): boolean;
    registerSignalHandler(arg0: number, arg1: (param0: string) => void): void;
    sendDiscoveryRequest(arg0: InetSocketAddress, arg1: (param0: number, param1: ByteBuf) => void): void;
    // private sendPacket(arg0: ByteBuf, arg1: InetSocketAddress): void;
    sendSignal(arg0: InetSocketAddress, arg1: number, arg2: string): void;
    sendSignal(arg0: number, arg1: string): void;
    sendSignalRetrying(arg0: InetSocketAddress, arg1: number, arg2: string, arg3: number): ScheduledFuture<Object>;
    setNewConnectionHandler(arg0: (param0: number, param1: string, param2: string) => void): void;
    setPongData(arg0: NetherNetServerSignaling$PongData): void;
    unregisterSignalHandler(arg0: number): void;
    // private writeString(arg0: ByteBuf, arg1: string): void;
    // private writeUnsignedVarInt(arg0: ByteBuf, arg1: number): void;
}