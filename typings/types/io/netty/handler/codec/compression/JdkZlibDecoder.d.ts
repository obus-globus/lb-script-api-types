import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ByteToMessageDecoder$Cumulator } from '../../../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { ByteBufChecksum } from '../../../../../io/netty/handler/codec/compression/ByteBufChecksum.d.ts'
import type { JdkZlibDecoder$GzipState } from '../../../../../io/netty/handler/codec/compression/JdkZlibDecoder$GzipState.d.ts'
import type { ZlibDecoder } from '../../../../../io/netty/handler/codec/compression/ZlibDecoder.d.ts'
import type { ZlibWrapper } from '../../../../../io/netty/handler/codec/compression/ZlibWrapper.d.ts'
import type { Inflater } from '../../../../../java/util/zip/Inflater.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JdkZlibDecoder extends ZlibDecoder {
    static COMPOSITE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static MERGE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    constructor()
    constructor(arg0: ZlibWrapper)
    constructor(arg0: ZlibWrapper, arg1: boolean)
    constructor(arg0: ZlibWrapper, arg1: boolean, arg2: number)
    constructor(arg0: ZlibWrapper, arg1: number)
    constructor(arg0: boolean)
    constructor(arg0: boolean, arg1: number)
    constructor(arg0: number[])
    constructor(arg0: number[], arg1: number)
    constructor(arg0: number)
    // private crc: ByteBufChecksum;
    // private decideZlibOrNone: boolean;
    // private decompressConcatenated: boolean;
    // private dictionary: number[];
    // private finished: boolean;
    // private flags: number;
    // private gzipState: JdkZlibDecoder$GzipState;
    // private inflater: Inflater;
    // private maxForwardBytes: number;
    // private needsRead: boolean;
    // private xlen: number;
    channelReadComplete(arg0: ChannelHandlerContext): void;
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    decompressionBufferExhausted(arg0: ByteBuf): void;
    // private handleGzipFooter(arg0: ByteBuf): boolean;
    handlerRemoved0(arg0: ChannelHandlerContext): void;
    isClosed(): boolean;
    // private readGZIPFooter(arg0: ByteBuf): boolean;
    // private readGZIPHeader(arg0: ByteBuf): boolean;
    // private skipIfNeeded(arg0: ByteBuf, arg1: number): boolean;
    // private verifyCrc(arg0: ByteBuf): boolean;
    // private verifyCrc16(arg0: ByteBuf): boolean;
}