import type { ChannelFuture } from '../../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelMetadata } from '../../../../../io/netty/channel/ChannelMetadata.d.ts'
import type { ChannelOutboundBuffer } from '../../../../../io/netty/channel/ChannelOutboundBuffer.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { RecvByteBufAllocator$Handle } from '../../../../../io/netty/channel/RecvByteBufAllocator$Handle.d.ts'
import type { AbstractNioMessageChannel } from '../../../../../io/netty/channel/nio/AbstractNioMessageChannel.d.ts'
import type { DatagramChannel } from '../../../../../io/netty/channel/socket/DatagramChannel.d.ts'
import type { DatagramChannelConfig } from '../../../../../io/netty/channel/socket/DatagramChannelConfig.d.ts'
import type { InternetProtocolFamily } from '../../../../../io/netty/channel/socket/InternetProtocolFamily.d.ts'
import type { SocketProtocolFamily } from '../../../../../io/netty/channel/socket/SocketProtocolFamily.d.ts'
import type { InetAddress } from '../../../../../java/net/InetAddress.d.ts'
import type { InetSocketAddress } from '../../../../../java/net/InetSocketAddress.d.ts'
import type { NetworkInterface } from '../../../../../java/net/NetworkInterface.d.ts'
import type { SocketAddress } from '../../../../../java/net/SocketAddress.d.ts'
import type { DatagramChannel } from '../../../../../java/nio/channels/DatagramChannel.d.ts'
import type { MembershipKey } from '../../../../../java/nio/channels/MembershipKey.d.ts'
import type { SelectorProvider } from '../../../../../java/nio/channels/spi/SelectorProvider.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class NioDatagramChannel extends AbstractNioMessageChannel implements DatagramChannel {
    constructor()
    constructor(arg0: InternetProtocolFamily)
    constructor(arg0: SocketProtocolFamily)
    constructor(arg0: DatagramChannel)
    constructor(arg0: SelectorProvider)
    constructor(arg0: SelectorProvider, arg1: InternetProtocolFamily)
    constructor(arg0: SelectorProvider, arg1: SocketProtocolFamily)
    // private config: DatagramChannelConfig;
    // private memberships: Map<InetAddress, MembershipKey[]>;
    block(arg0: InetAddress, arg1: InetAddress): ChannelFuture;
    block(arg0: InetAddress, arg1: InetAddress, arg2: ChannelPromise): ChannelFuture;
    block(arg0: InetAddress, arg1: NetworkInterface, arg2: InetAddress): ChannelFuture;
    block(arg0: InetAddress, arg1: NetworkInterface, arg2: InetAddress, arg3: ChannelPromise): ChannelFuture;
    clearReadPending0(): void;
    closeOnReadError(arg0: Throwable): boolean;
    config(): DatagramChannelConfig;
    continueOnWriteError(): boolean;
    continueReading(arg0: RecvByteBufAllocator$Handle): boolean;
    doBind(arg0: SocketAddress): void;
    // private doBind0(arg0: SocketAddress): void;
    doClose(): void;
    doConnect(arg0: SocketAddress, arg1: SocketAddress): boolean;
    doDisconnect(): void;
    doFinishConnect(): void;
    doReadMessages(arg0: Object[]): number;
    doWriteMessage(arg0: Object, arg1: ChannelOutboundBuffer): boolean;
    filterOutboundMessage(arg0: Object): Object;
    isActive(): boolean;
    isConnected(): boolean;
    javaChannel(): DatagramChannel;
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
    setReadPending(arg0: boolean): void;
}