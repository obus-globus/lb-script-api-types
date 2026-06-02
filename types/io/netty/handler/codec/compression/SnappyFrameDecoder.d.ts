import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ByteToMessageDecoder } from '../../../../../io/netty/handler/codec/ByteToMessageDecoder.d.ts'
import type { ByteToMessageDecoder$Cumulator } from '../../../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { Snappy } from '../../../../../io/netty/handler/codec/compression/Snappy.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SnappyFrameDecoder extends ByteToMessageDecoder {
    static COMPOSITE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static MERGE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    constructor()
    constructor(arg0: boolean)
    // private corrupted: boolean;
    // private numBytesToSkip: number;
    // private snappy: Snappy;
    // private started: boolean;
    // private validateChecksums: boolean;
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
}