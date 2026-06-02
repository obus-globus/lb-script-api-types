import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ByteToMessageDecoder } from '../../../../io/netty/handler/codec/ByteToMessageDecoder.d.ts'
import type { ByteToMessageDecoder$Cumulator } from '../../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { ByteOrder } from '../../../../java/nio/ByteOrder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LengthFieldBasedFrameDecoder extends ByteToMessageDecoder {
    static COMPOSITE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static MERGE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    constructor(arg0: ByteOrder, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean)
    constructor(arg0: number, arg1: number, arg2: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean)
    // private byteOrder: ByteOrder;
    // private bytesToDiscard: number;
    // private discardingTooLongFrame: boolean;
    // private failFast: boolean;
    // private frameLengthInt: number;
    // private initialBytesToStrip: number;
    // private lengthAdjustment: number;
    // private lengthFieldEndOffset: number;
    // private lengthFieldLength: number;
    // private lengthFieldOffset: number;
    // private maxFrameLength: number;
    // private tooLongFrameLength: number;
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf): Object;
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    // private discardingTooLongFrame(arg0: ByteBuf): void;
    // private exceededFrameLength(arg0: ByteBuf, arg1: number): void;
    extractFrame(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: number, arg3: number): ByteBuf;
    // private fail(arg0: number): void;
    // private failIfNecessary(arg0: boolean): void;
    getUnadjustedFrameLength(arg0: ByteBuf, arg1: number, arg2: number, arg3: ByteOrder): number;
}