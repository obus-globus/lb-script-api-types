import type { AbstractChannel } from '../../../../../io/netty/channel/AbstractChannel.d.ts'
import type { AbstractChannel$AbstractUnsafe } from '../../../../../io/netty/channel/AbstractChannel$AbstractUnsafe.d.ts'
import type { ChannelHandler } from '../../../../../io/netty/channel/ChannelHandler.d.ts'
import type { ChannelMetadata } from '../../../../../io/netty/channel/ChannelMetadata.d.ts'
import type { ChannelOutboundBuffer } from '../../../../../io/netty/channel/ChannelOutboundBuffer.d.ts'
import type { InetSocketAddress } from '../../../../../java/net/InetSocketAddress.d.ts'
import type { SocketAddress } from '../../../../../java/net/SocketAddress.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { RakChannel } from '../../../../../org/cloudburstmc/netty/channel/raknet/RakChannel.d.ts'
import type { RakServerChannel } from '../../../../../org/cloudburstmc/netty/channel/raknet/RakServerChannel.d.ts'
import type { RakChannelConfig } from '../../../../../org/cloudburstmc/netty/channel/raknet/config/RakChannelConfig.d.ts'
export class RakChildChannel extends AbstractChannel implements RakChannel {
    constructor(arg0: InetSocketAddress, arg1: InetSocketAddress, arg2: RakServerChannel, arg3: number, arg4: number, arg5: number, arg6: (param0: RakChannel) => void)
    readonly active: boolean;
    // private config: RakChannelConfig;
    // private localAddress: InetSocketAddress;
    readonly open: boolean;
    // private rakPipeline: (Object | null)[];
    // private remoteAddress: InetSocketAddress;
    config(): RakChannelConfig;
    doBeginRead(): void;
    doBind(arg0: SocketAddress): void;
    doClose(): void;
    doDisconnect(): void;
    doWrite(arg0: ChannelOutboundBuffer): void;
    isActive(): boolean;
    isCompatible(arg0: (Object | null)[]): boolean;
    isOpen(): boolean;
    localAddress(): InetSocketAddress;
    localAddress0(): SocketAddress;
    metadata(): ChannelMetadata;
    newUnsafe(): AbstractChannel$AbstractUnsafe;
    rakPipeline(): Map$Entry<string, ChannelHandler>[];
    remoteAddress(): InetSocketAddress;
    remoteAddress0(): SocketAddress;
    setActive(arg0: boolean): void;
}