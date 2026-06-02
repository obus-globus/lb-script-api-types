import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { ChannelFuture } from '../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelHandler } from '../../../../io/netty/channel/ChannelHandler.d.ts'
import type { ChannelMetadata } from '../../../../io/netty/channel/ChannelMetadata.d.ts'
import type { ChannelOutboundBuffer } from '../../../../io/netty/channel/ChannelOutboundBuffer.d.ts'
import type { FileRegion } from '../../../../io/netty/channel/FileRegion.d.ts'
import type { RecvByteBufAllocator$Handle } from '../../../../io/netty/channel/RecvByteBufAllocator$Handle.d.ts'
import type { AbstractOioChannel } from '../../../../io/netty/channel/oio/AbstractOioChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export abstract class AbstractOioByteChannel extends AbstractOioChannel {
    constructor(arg0: Channel)
    available(): number;
    // private closeOnRead(arg0: Map$Entry<string, ChannelHandler>[]): void;
    doRead(): void;
    doReadBytes(arg0: ByteBuf): number;
    doWrite(arg0: ChannelOutboundBuffer): void;
    doWriteBytes(arg0: ByteBuf): void;
    doWriteFileRegion(arg0: FileRegion): void;
    filterOutboundMessage(arg0: Object): Object;
    // private handleReadException(arg0: Map$Entry<string, ChannelHandler>[], arg1: ByteBuf, arg2: Throwable, arg3: boolean, arg4: RecvByteBufAllocator$Handle): void;
    isInputShutdown(): boolean;
    metadata(): ChannelMetadata;
    shutdownInput(): ChannelFuture;
}