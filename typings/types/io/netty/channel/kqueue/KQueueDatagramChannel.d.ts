import type { ChannelFuture } from '../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { AbstractKQueueChannel$AbstractKQueueUnsafe } from '../../../../io/netty/channel/kqueue/AbstractKQueueChannel$AbstractKQueueUnsafe.d.ts'
import type { AbstractKQueueDatagramChannel } from '../../../../io/netty/channel/kqueue/AbstractKQueueDatagramChannel.d.ts'
import type { BsdSocket } from '../../../../io/netty/channel/kqueue/BsdSocket.d.ts'
import type { KQueueDatagramChannelConfig } from '../../../../io/netty/channel/kqueue/KQueueDatagramChannelConfig.d.ts'
import type { DatagramChannel } from '../../../../io/netty/channel/socket/DatagramChannel.d.ts'
import type { InternetProtocolFamily } from '../../../../io/netty/channel/socket/InternetProtocolFamily.d.ts'
import type { SocketProtocolFamily } from '../../../../io/netty/channel/socket/SocketProtocolFamily.d.ts'
import type { InetAddress } from '../../../../java/net/InetAddress.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
import type { NetworkInterface } from '../../../../java/net/NetworkInterface.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class KQueueDatagramChannel extends AbstractKQueueDatagramChannel implements DatagramChannel {
    constructor()
    constructor(arg0: BsdSocket, arg1: boolean)
    constructor(arg0: InternetProtocolFamily)
    constructor(arg0: SocketProtocolFamily)
    constructor(arg0: number)
    // private config: KQueueDatagramChannelConfig;
    readonly connected: boolean;
    block(arg0: InetAddress, arg1: InetAddress): ChannelFuture;
    block(arg0: InetAddress, arg1: InetAddress, arg2: ChannelPromise): ChannelFuture;
    block(arg0: InetAddress, arg1: NetworkInterface, arg2: InetAddress): ChannelFuture;
    block(arg0: InetAddress, arg1: NetworkInterface, arg2: InetAddress, arg3: ChannelPromise): ChannelFuture;
    config(): KQueueDatagramChannelConfig;
    doBind(arg0: SocketAddress): void;
    doClose(): void;
    doConnect(arg0: SocketAddress, arg1: SocketAddress): boolean;
    doDisconnect(): void;
    doWriteMessage(arg0: Object): boolean;
    filterOutboundMessage(arg0: Object): Object;
    isActive(): boolean;
    isConnected(): boolean;
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
    newUnsafe(): AbstractKQueueChannel$AbstractKQueueUnsafe;
    remoteAddress(): InetSocketAddress;
}