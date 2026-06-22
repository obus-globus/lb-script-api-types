import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { ChannelConfig } from '../../../../io/netty/channel/ChannelConfig.d.ts'
import type { ChannelMetadata } from '../../../../io/netty/channel/ChannelMetadata.d.ts'
import type { ChannelOutboundBuffer } from '../../../../io/netty/channel/ChannelOutboundBuffer.d.ts'
import type { ServerChannel } from '../../../../io/netty/channel/ServerChannel.d.ts'
import type { AbstractKQueueChannel } from '../../../../io/netty/channel/kqueue/AbstractKQueueChannel.d.ts'
import type { AbstractKQueueChannel$AbstractKQueueUnsafe } from '../../../../io/netty/channel/kqueue/AbstractKQueueChannel$AbstractKQueueUnsafe.d.ts'
import type { BsdSocket } from '../../../../io/netty/channel/kqueue/BsdSocket.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractKQueueServerChannel extends AbstractKQueueChannel implements ServerChannel {
    constructor(arg0: BsdSocket)
    constructor(arg0: BsdSocket, arg1: boolean)
    config(): ChannelConfig;
    doConnect(arg0: SocketAddress, arg1: SocketAddress): boolean;
    doWrite(arg0: ChannelOutboundBuffer): void;
    filterOutboundMessage(arg0: Object): Object;
    metadata(): ChannelMetadata;
    newChildChannel(arg0: number, arg1: number[], arg2: number, arg3: number): Channel;
    newUnsafe(): AbstractKQueueChannel$AbstractKQueueUnsafe;
    remoteAddress0(): InetSocketAddress;
}