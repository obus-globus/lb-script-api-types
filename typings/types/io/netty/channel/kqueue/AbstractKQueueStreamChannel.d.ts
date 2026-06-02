import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { ChannelFuture } from '../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelMetadata } from '../../../../io/netty/channel/ChannelMetadata.d.ts'
import type { ChannelOutboundBuffer } from '../../../../io/netty/channel/ChannelOutboundBuffer.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { DefaultFileRegion } from '../../../../io/netty/channel/DefaultFileRegion.d.ts'
import type { FileRegion } from '../../../../io/netty/channel/FileRegion.d.ts'
import type { AbstractKQueueChannel } from '../../../../io/netty/channel/kqueue/AbstractKQueueChannel.d.ts'
import type { AbstractKQueueChannel$AbstractKQueueUnsafe } from '../../../../io/netty/channel/kqueue/AbstractKQueueChannel$AbstractKQueueUnsafe.d.ts'
import type { BsdSocket } from '../../../../io/netty/channel/kqueue/BsdSocket.d.ts'
import type { DuplexChannel } from '../../../../io/netty/channel/socket/DuplexChannel.d.ts'
import type { IovArray } from '../../../../io/netty/channel/unix/IovArray.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { WritableByteChannel } from '../../../../java/nio/channels/WritableByteChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractKQueueStreamChannel extends AbstractKQueueChannel implements DuplexChannel {
    constructor(arg0: Channel, arg1: BsdSocket, arg2: SocketAddress)
    constructor(arg0: Channel, arg1: BsdSocket, arg2: boolean)
    constructor(arg0: BsdSocket)
    // private byteChannel: WritableByteChannel;
    // private flushTask: () => void;
    // private adjustMaxBytesPerGatheringWrite(arg0: number, arg1: number, arg2: number): void;
    doShutdownOutput(): void;
    doWrite(arg0: ChannelOutboundBuffer): void;
    // private doWriteMultiple(arg0: ChannelOutboundBuffer): number;
    doWriteSingle(arg0: ChannelOutboundBuffer): number;
    filterOutboundMessage(arg0: Object): Object;
    isInputShutdown(): boolean;
    isOutputShutdown(): boolean;
    isShutdown(): boolean;
    metadata(): ChannelMetadata;
    newUnsafe(): AbstractKQueueChannel$AbstractKQueueUnsafe;
    shutdown(): ChannelFuture;
    shutdown(arg0: ChannelPromise): ChannelFuture;
    shutdownInput(): ChannelFuture;
    shutdownInput(arg0: ChannelPromise): ChannelFuture;
    // private shutdownInput0(arg0: ChannelPromise): void;
    shutdownOutput(): ChannelFuture;
    shutdownOutput(arg0: ChannelPromise): ChannelFuture;
    // private shutdownOutputDone(arg0: ChannelFuture, arg1: ChannelPromise): void;
    // private writeBytes(arg0: ChannelOutboundBuffer, arg1: ByteBuf): number;
    // private writeBytesMultiple(arg0: ChannelOutboundBuffer, arg1: IovArray): number;
    // private writeBytesMultiple(arg0: ChannelOutboundBuffer, arg1: ByteBuffer[], arg2: number, arg3: number, arg4: number): number;
    // private writeDefaultFileRegion(arg0: ChannelOutboundBuffer, arg1: DefaultFileRegion): number;
    // private writeFileRegion(arg0: ChannelOutboundBuffer, arg1: FileRegion): number;
}