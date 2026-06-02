import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelFuture } from '../../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { MessageToByteEncoder } from '../../../../../io/netty/handler/codec/MessageToByteEncoder.d.ts'
import type { ByteBufChecksum } from '../../../../../io/netty/handler/codec/compression/ByteBufChecksum.d.ts'
import type { Checksum } from '../../../../../java/util/zip/Checksum.d.ts'
import type { LZ4Compressor } from '../../../../../net/jpountz/lz4/LZ4Compressor.d.ts'
import type { LZ4Factory } from '../../../../../net/jpountz/lz4/LZ4Factory.d.ts'
export class Lz4FrameEncoder extends MessageToByteEncoder<ByteBuf> {
    constructor()
    constructor(arg0: boolean)
    constructor(arg0: LZ4Factory, arg1: boolean, arg2: number, arg3: Checksum)
    constructor(arg0: LZ4Factory, arg1: boolean, arg2: number, arg3: Checksum, arg4: number)
    // private blockSize: number;
    // private buffer: ByteBuf;
    // private checksum: ByteBufChecksum;
    // private compressionLevel: number;
    // private compressor: LZ4Compressor;
    // private ctx: ChannelHandlerContext;
    // private finished: boolean;
    // private maxEncodeSize: number;
    allocateBuffer(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: boolean): ByteBuf;
    // private allocateBuffer(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: boolean, arg3: boolean): ByteBuf;
    close(): ChannelFuture;
    close(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    close(arg0: ChannelPromise): ChannelFuture;
    // private ctx(): ChannelHandlerContext;
    encode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: ByteBuf): void;
    // private finishEncode(arg0: ChannelHandlerContext, arg1: ChannelPromise): ChannelFuture;
    flush(arg0: ChannelHandlerContext): void;
    // private flushBufferedData(arg0: ByteBuf): void;
    getBackingBuffer(): ByteBuf;
    handlerAdded(arg0: ChannelHandlerContext): void;
    handlerRemoved(arg0: ChannelHandlerContext): void;
    isClosed(): boolean;
}