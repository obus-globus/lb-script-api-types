import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { ChannelOutboundBuffer } from '../../../../io/netty/channel/ChannelOutboundBuffer.d.ts'
import type { RecvByteBufAllocator$Handle } from '../../../../io/netty/channel/RecvByteBufAllocator$Handle.d.ts'
import type { AbstractNioChannel } from '../../../../io/netty/channel/nio/AbstractNioChannel.d.ts'
import type { AbstractNioChannel$AbstractNioUnsafe } from '../../../../io/netty/channel/nio/AbstractNioChannel$AbstractNioUnsafe.d.ts'
import type { NioIoOps } from '../../../../io/netty/channel/nio/NioIoOps.d.ts'
import type { SelectableChannel } from '../../../../java/nio/channels/SelectableChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export abstract class AbstractNioMessageChannel extends AbstractNioChannel {
    constructor(arg0: Channel, arg1: SelectableChannel, arg2: NioIoOps)
    constructor(arg0: Channel, arg1: SelectableChannel, arg2: number)
    // private inputShutdown: boolean;
    closeOnReadError(arg0: Throwable): boolean;
    continueOnWriteError(): boolean;
    continueReading(arg0: RecvByteBufAllocator$Handle): boolean;
    doBeginRead(): void;
    doReadMessages(arg0: Object[]): number;
    doWrite(arg0: ChannelOutboundBuffer): void;
    doWriteMessage(arg0: Object, arg1: ChannelOutboundBuffer): boolean;
    newUnsafe(): AbstractNioChannel$AbstractNioUnsafe;
}