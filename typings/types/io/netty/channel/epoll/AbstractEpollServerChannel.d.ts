import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { ChannelConfig } from '../../../../io/netty/channel/ChannelConfig.d.ts'
import type { ChannelMetadata } from '../../../../io/netty/channel/ChannelMetadata.d.ts'
import type { ChannelOutboundBuffer } from '../../../../io/netty/channel/ChannelOutboundBuffer.d.ts'
import type { ServerChannel } from '../../../../io/netty/channel/ServerChannel.d.ts'
import type { AbstractEpollChannel } from '../../../../io/netty/channel/epoll/AbstractEpollChannel.d.ts'
import type { AbstractEpollChannel$AbstractEpollUnsafe } from '../../../../io/netty/channel/epoll/AbstractEpollChannel$AbstractEpollUnsafe.d.ts'
import type { LinuxSocket } from '../../../../io/netty/channel/epoll/LinuxSocket.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractEpollServerChannel extends AbstractEpollChannel implements ServerChannel {
    constructor(arg0: LinuxSocket)
    constructor(arg0: LinuxSocket, arg1: boolean)
    constructor(arg0: number)
    config(): ChannelConfig;
    doConnect(arg0: SocketAddress, arg1: SocketAddress): boolean;
    doWrite(arg0: ChannelOutboundBuffer): void;
    filterOutboundMessage(arg0: Object): Object;
    metadata(): ChannelMetadata;
    newChildChannel(arg0: number, arg1: number[], arg2: number, arg3: number): Channel;
    newUnsafe(): AbstractEpollChannel$AbstractEpollUnsafe;
    remoteAddress0(): InetSocketAddress;
}