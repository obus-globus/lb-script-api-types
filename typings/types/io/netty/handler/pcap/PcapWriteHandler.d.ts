import type { PcapWriteHandler$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelDuplexHandler } from '../../../../io/netty/channel/ChannelDuplexHandler.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { PcapWriteHandler$Builder } from '../../../../io/netty/handler/pcap/PcapWriteHandler$Builder.d.ts'
import type { PcapWriteHandler$ChannelType } from '../../../../io/netty/handler/pcap/PcapWriteHandler$ChannelType.d.ts'
import type { PcapWriter } from '../../../../io/netty/handler/pcap/PcapWriter.d.ts'
import type { State } from '../../../../io/netty/handler/pcap/State.d.ts'
import type { InternalLogger } from '../../../../io/netty/util/internal/logging/InternalLogger.d.ts'
import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
import type { AtomicReference } from '../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class PcapWriteHandler extends ChannelDuplexHandler implements Closeable {
    static builder(): PcapWriteHandler$Builder;
    static writeGlobalHeader(paramarg0: OutputStream): void;
    private constructor(arg0: PcapWriteHandler$Builder, arg1: OutputStream)
    constructor(arg0: PcapWriteHandler$Builder, arg1: OutputStream, arg2: PcapWriteHandler$1)
    constructor(arg0: OutputStream)
    constructor(arg0: OutputStream, arg1: boolean, arg2: boolean)
    // private captureZeroByte: boolean;
    // private channelType: PcapWriteHandler$ChannelType;
    // private handlerAddr: InetSocketAddress;
    // private initiatorAddr: InetSocketAddress;
    // private isServerPipeline: boolean;
    // private logger: InternalLogger;
    // private outputStream: OutputStream;
    // private pCapWriter: PcapWriter;
    // private receiveSegmentNumber: number;
    // private sendSegmentNumber: number;
    // private sharedOutputStream: boolean;
    // private state: AtomicReference<State>;
    // private writePcapGlobalHeader: boolean;
    channelActive(arg0: ChannelHandlerContext): void;
    channelRead(arg0: ChannelHandlerContext, arg1: Object): void;
    close(): void;
    close(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    // private completeTCPWrite(arg0: InetSocketAddress, arg1: InetSocketAddress, arg2: ByteBuf, arg3: ByteBufAllocator, arg4: ChannelHandlerContext): void;
    // private completeUDPWrite(arg0: InetSocketAddress, arg1: InetSocketAddress, arg2: ByteBuf, arg3: ByteBufAllocator, arg4: ChannelHandlerContext): void;
    exceptionCaught(arg0: ChannelHandlerContext, arg1: Throwable): void;
    // private handleTCP(arg0: ChannelHandlerContext, arg1: Object, arg2: boolean): void;
    // private handleTcpPacket(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: boolean, arg3: ByteBufAllocator): void;
    // private handleUDP(arg0: ChannelHandlerContext, arg1: Object, arg2: boolean): void;
    handlerRemoved(arg0: ChannelHandlerContext): void;
    // private initializeIfNecessary(arg0: ChannelHandlerContext): void;
    isWriting(): boolean;
    // private logDiscard(): void;
    // private logTCP(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: InetSocketAddress, arg5: InetSocketAddress, arg6: boolean): void;
    markClosed(): void;
    outputStream(): OutputStream;
    pCapWriter(): PcapWriter;
    pause(): void;
    resume(): void;
    sharedOutputStream(): boolean;
    state(): State;
    toString(): string;
    write(arg0: ChannelHandlerContext, arg1: Object, arg2: ChannelPromise): void;
    writePcapGlobalHeader(): boolean;
}