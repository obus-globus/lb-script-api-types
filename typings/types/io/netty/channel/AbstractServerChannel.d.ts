import type { AbstractChannel } from '../../../io/netty/channel/AbstractChannel.d.ts'
import type { AbstractChannel$AbstractUnsafe } from '../../../io/netty/channel/AbstractChannel$AbstractUnsafe.d.ts'
import type { ChannelConfig } from '../../../io/netty/channel/ChannelConfig.d.ts'
import type { ChannelMetadata } from '../../../io/netty/channel/ChannelMetadata.d.ts'
import type { ChannelOutboundBuffer } from '../../../io/netty/channel/ChannelOutboundBuffer.d.ts'
import type { ServerChannel } from '../../../io/netty/channel/ServerChannel.d.ts'
import type { SocketAddress } from '../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class AbstractServerChannel extends AbstractChannel implements ServerChannel {
    constructor()
    config(): ChannelConfig;
    doDisconnect(): void;
    doWrite(arg0: ChannelOutboundBuffer): void;
    filterOutboundMessage(arg0: Object): Object;
    isActive(): boolean;
    isOpen(): boolean;
    metadata(): ChannelMetadata;
    newUnsafe(): AbstractChannel$AbstractUnsafe;
    remoteAddress(): SocketAddress;
    remoteAddress0(): SocketAddress;
}