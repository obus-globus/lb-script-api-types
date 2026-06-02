import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelFuture } from '../../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { ZlibEncoder } from '../../../../../io/netty/handler/codec/compression/ZlibEncoder.d.ts'
import type { ZlibWrapper } from '../../../../../io/netty/handler/codec/compression/ZlibWrapper.d.ts'
import type { CRC32 } from '../../../../../java/util/zip/CRC32.d.ts'
import type { Deflater } from '../../../../../java/util/zip/Deflater.d.ts'
export class JdkZlibEncoder extends ZlibEncoder {
    constructor()
    constructor(arg0: ZlibWrapper)
    constructor(arg0: ZlibWrapper, arg1: number)
    constructor(arg0: number[])
    constructor(arg0: number)
    constructor(arg0: number, arg1: number[])
    // private crc: CRC32;
    // private ctx: ChannelHandlerContext;
    // private deflater: Deflater;
    // private finished: boolean;
    // private wrapper: ZlibWrapper;
    // private writeHeader: boolean;
    allocateBuffer(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: boolean): ByteBuf;
    close(): ChannelFuture;
    close(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    close(arg0: ChannelPromise): ChannelFuture;
    // private ctx(): ChannelHandlerContext;
    // private deflate(arg0: ByteBuf): void;
    encode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: ByteBuf): void;
    // private encodeSome(arg0: ByteBuf, arg1: ByteBuf): void;
    // private finishEncode(arg0: ChannelHandlerContext, arg1: ChannelPromise): ChannelFuture;
    handlerAdded(arg0: ChannelHandlerContext): void;
    isClosed(): boolean;
}