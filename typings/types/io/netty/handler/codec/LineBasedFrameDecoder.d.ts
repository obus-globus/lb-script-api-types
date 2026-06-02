import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ByteToMessageDecoder } from '../../../../io/netty/handler/codec/ByteToMessageDecoder.d.ts'
import type { ByteToMessageDecoder$Cumulator } from '../../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LineBasedFrameDecoder extends ByteToMessageDecoder {
    static COMPOSITE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static MERGE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    constructor(arg0: number)
    constructor(arg0: number, arg1: boolean, arg2: boolean)
    // private discardedBytes: number;
    // private discarding: boolean;
    // private failFast: boolean;
    // private maxLength: number;
    // private offset: number;
    // private stripDelimiter: boolean;
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf): Object;
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    // private fail(arg0: ChannelHandlerContext, arg1: number): void;
    // private fail(arg0: ChannelHandlerContext, arg1: string): void;
    // private findEndOfLine(arg0: ByteBuf): number;
}