import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { ChannelConfig } from '../../../../io/netty/channel/ChannelConfig.d.ts'
import type { ChannelFuture } from '../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelMetadata } from '../../../../io/netty/channel/ChannelMetadata.d.ts'
import type { ChannelOutboundBuffer } from '../../../../io/netty/channel/ChannelOutboundBuffer.d.ts'
import type { FileRegion } from '../../../../io/netty/channel/FileRegion.d.ts'
import type { AbstractNioChannel } from '../../../../io/netty/channel/nio/AbstractNioChannel.d.ts'
import type { AbstractNioChannel$AbstractNioUnsafe } from '../../../../io/netty/channel/nio/AbstractNioChannel$AbstractNioUnsafe.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { SelectableChannel } from '../../../../java/nio/channels/SelectableChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractNioByteChannel extends AbstractNioChannel {
    constructor(arg0: Channel, arg1: SelectableChannel)
    // private flushTask: () => void;
    // private inputClosedSeenErrorOnRead: boolean;
    clearOpWrite(): void;
    doReadBytes(arg0: ByteBuf): number;
    doWrite(arg0: ChannelOutboundBuffer): void;
    doWrite0(arg0: ChannelOutboundBuffer): number;
    doWriteBytes(arg0: ByteBuf): number;
    doWriteFileRegion(arg0: FileRegion): number;
    // private doWriteInternal(arg0: ChannelOutboundBuffer, arg1: Object): number;
    filterOutboundMessage(arg0: Object): Object;
    incompleteWrite(arg0: boolean): void;
    isInputShutdown0(): boolean;
    metadata(): ChannelMetadata;
    newUnsafe(): AbstractNioChannel$AbstractNioUnsafe;
    setOpWrite(): void;
    shouldBreakReadReady(arg0: ChannelConfig): boolean;
    shutdownInput(): ChannelFuture;
}