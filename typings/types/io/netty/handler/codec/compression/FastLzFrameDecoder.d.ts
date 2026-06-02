import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ByteToMessageDecoder } from '../../../../../io/netty/handler/codec/ByteToMessageDecoder.d.ts'
import type { ByteToMessageDecoder$Cumulator } from '../../../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { ByteBufChecksum } from '../../../../../io/netty/handler/codec/compression/ByteBufChecksum.d.ts'
import type { FastLzFrameDecoder$State } from '../../../../../io/netty/handler/codec/compression/FastLzFrameDecoder$State.d.ts'
import type { Checksum } from '../../../../../java/util/zip/Checksum.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FastLzFrameDecoder extends ByteToMessageDecoder {
    static COMPOSITE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static MERGE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    constructor()
    constructor(arg0: Checksum)
    constructor(arg0: boolean)
    // private checksum: ByteBufChecksum;
    // private chunkLength: number;
    // private currentChecksum: number;
    // private currentState: FastLzFrameDecoder$State;
    // private hasChecksum: boolean;
    // private isCompressed: boolean;
    // private originalLength: number;
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
}