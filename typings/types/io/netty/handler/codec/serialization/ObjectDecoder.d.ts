import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ByteToMessageDecoder$Cumulator } from '../../../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { LengthFieldBasedFrameDecoder } from '../../../../../io/netty/handler/codec/LengthFieldBasedFrameDecoder.d.ts'
import type { ClassResolver } from '../../../../../io/netty/handler/codec/serialization/ClassResolver.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectDecoder extends LengthFieldBasedFrameDecoder {
    static COMPOSITE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static MERGE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    constructor(arg0: ClassResolver)
    constructor(arg0: number, arg1: ClassResolver)
    // private classResolver: ClassResolver;
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf): Object;
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
}