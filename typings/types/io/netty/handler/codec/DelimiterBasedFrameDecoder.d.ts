import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ByteToMessageDecoder } from '../../../../io/netty/handler/codec/ByteToMessageDecoder.d.ts'
import type { ByteToMessageDecoder$Cumulator } from '../../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { LineBasedFrameDecoder } from '../../../../io/netty/handler/codec/LineBasedFrameDecoder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DelimiterBasedFrameDecoder extends ByteToMessageDecoder {
    static COMPOSITE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static MERGE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    constructor(arg0: number, arg1: ByteBuf)
    constructor(arg0: number, ...arg1: ByteBuf[])
    constructor(arg0: number, arg1: boolean, arg2: ByteBuf)
    constructor(arg0: number, arg1: boolean, ...arg2: ByteBuf[])
    constructor(arg0: number, arg1: boolean, arg2: boolean, arg3: ByteBuf)
    constructor(arg0: number, arg1: boolean, arg2: boolean, ...arg3: ByteBuf[])
    // private delimiters: ByteBuf[];
    // private discardingTooLongFrame: boolean;
    // private failFast: boolean;
    // private lineBasedDecoder: LineBasedFrameDecoder;
    // private maxFrameLength: number;
    // private stripDelimiter: boolean;
    // private tooLongFrameLength: number;
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf): Object;
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    // private fail(arg0: number): void;
    // private isSubclass(): boolean;
}