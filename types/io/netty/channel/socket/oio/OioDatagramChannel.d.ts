import type { ChannelFuture } from '../../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelMetadata } from '../../../../../io/netty/channel/ChannelMetadata.d.ts'
import type { ChannelOutboundBuffer } from '../../../../../io/netty/channel/ChannelOutboundBuffer.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { AbstractOioMessageChannel } from '../../../../../io/netty/channel/oio/AbstractOioMessageChannel.d.ts'
import type { DatagramChannel } from '../../../../../io/netty/channel/socket/DatagramChannel.d.ts'
import type { DatagramChannelConfig } from '../../../../../io/netty/channel/socket/DatagramChannelConfig.d.ts'
import type { OioDatagramChannelConfig } from '../../../../../io/netty/channel/socket/oio/OioDatagramChannelConfig.d.ts'
import type { DatagramPacket } from '../../../../../java/net/DatagramPacket.d.ts'
import type { InetAddress } from '../../../../../java/net/InetAddress.d.ts'
import type { InetSocketAddress } from '../../../../../java/net/InetSocketAddress.d.ts'
import type { MulticastSocket } from '../../../../../java/net/MulticastSocket.d.ts'
import type { NetworkInterface } from '../../../../../java/net/NetworkInterface.d.ts'
import type { SocketAddress } from '../../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class OioDatagramChannel extends AbstractOioMessageChannel implements DatagramChannel {
    constructor()
    constructor(arg0: MulticastSocket)
    // private config: OioDatagramChannelConfig;
    // private socket: MulticastSocket;
    // private tmpPacket: DatagramPacket;
    block(arg0: InetAddress, arg1: InetAddress): ChannelFuture;
    block(arg0: InetAddress, arg1: InetAddress, arg2: ChannelPromise): ChannelFuture;
    block(arg0: InetAddress, arg1: NetworkInterface, arg2: InetAddress): ChannelFuture;
    block(arg0: InetAddress, arg1: NetworkInterface, arg2: InetAddress, arg3: ChannelPromise): ChannelFuture;
    config(): DatagramChannelConfig;
    doBind(arg0: SocketAddress): void;
    doClose(): void;
    doConnect(arg0: SocketAddress, arg1: SocketAddress): void;
    doDisconnect(): void;
    doReadMessages(arg0: Object[]): number;
    doWrite(arg0: ChannelOutboundBuffer): void;
    // private ensureBound(): void;
    filterOutboundMessage(arg0: Object): Object;
    isActive(): boolean;
    isConnected(): boolean;
    isOpen(): boolean;
    joinGroup(arg0: InetAddress): ChannelFuture;
    joinGroup(arg0: InetAddress, arg1: ChannelPromise): ChannelFuture;
    joinGroup(arg0: InetAddress, arg1: NetworkInterface, arg2: InetAddress): ChannelFuture;
    joinGroup(arg0: InetAddress, arg1: NetworkInterface, arg2: InetAddress, arg3: ChannelPromise): ChannelFuture;
    joinGroup(arg0: InetSocketAddress, arg1: NetworkInterface): ChannelFuture;
    joinGroup(arg0: InetSocketAddress, arg1: NetworkInterface, arg2: ChannelPromise): ChannelFuture;
    leaveGroup(arg0: InetAddress): ChannelFuture;
    leaveGroup(arg0: InetAddress, arg1: ChannelPromise): ChannelFuture;
    leaveGroup(arg0: InetAddress, arg1: NetworkInterface, arg2: InetAddress): ChannelFuture;
    leaveGroup(arg0: InetAddress, arg1: NetworkInterface, arg2: InetAddress, arg3: ChannelPromise): ChannelFuture;
    leaveGroup(arg0: InetSocketAddress, arg1: NetworkInterface): ChannelFuture;
    leaveGroup(arg0: InetSocketAddress, arg1: NetworkInterface, arg2: ChannelPromise): ChannelFuture;
    localAddress(): InetSocketAddress;
    localAddress0(): SocketAddress;
    metadata(): ChannelMetadata;
    remoteAddress(): InetSocketAddress;
    remoteAddress0(): SocketAddress;
}