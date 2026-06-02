import type { AbstractChannel } from '../../../io/netty/channel/AbstractChannel.d.ts'
import type { AbstractChannel$AbstractUnsafe } from '../../../io/netty/channel/AbstractChannel$AbstractUnsafe.d.ts'
import type { ChannelConfig } from '../../../io/netty/channel/ChannelConfig.d.ts'
import type { ChannelMetadata } from '../../../io/netty/channel/ChannelMetadata.d.ts'
import type { ChannelOutboundBuffer } from '../../../io/netty/channel/ChannelOutboundBuffer.d.ts'
import type { SocketAddress } from '../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class FailedChannel extends AbstractChannel {
    constructor()
    // private config: ChannelConfig;
    config(): ChannelConfig;
    doBeginRead(): void;
    doBind(arg0: SocketAddress): void;
    doClose(): void;
    doDisconnect(): void;
    doWrite(arg0: ChannelOutboundBuffer): void;
    isActive(): boolean;
    isCompatible(arg0: (Object | null)[]): boolean;
    isOpen(): boolean;
    localAddress0(): SocketAddress;
    metadata(): ChannelMetadata;
    newUnsafe(): AbstractChannel$AbstractUnsafe;
    remoteAddress0(): SocketAddress;
}