import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ByteToMessageDecoder } from '../../../../../io/netty/handler/codec/ByteToMessageDecoder.d.ts'
import type { ByteToMessageDecoder$Cumulator } from '../../../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { ByteBufChecksum } from '../../../../../io/netty/handler/codec/compression/ByteBufChecksum.d.ts'
import type { Lz4FrameDecoder$State } from '../../../../../io/netty/handler/codec/compression/Lz4FrameDecoder$State.d.ts'
import type { Checksum } from '../../../../../java/util/zip/Checksum.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LZ4Factory } from '../../../../../net/jpountz/lz4/LZ4Factory.d.ts'
import type { LZ4FastDecompressor } from '../../../../../net/jpountz/lz4/LZ4FastDecompressor.d.ts'
export class Lz4FrameDecoder extends ByteToMessageDecoder {
    static COMPOSITE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static MERGE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    constructor()
    constructor(arg0: boolean)
    constructor(arg0: boolean, arg1: number)
    constructor(arg0: LZ4Factory, arg1: Checksum)
    constructor(arg0: LZ4Factory, arg1: Checksum, arg2: number)
    constructor(arg0: LZ4Factory, arg1: boolean)
    // private blockType: number;
    // private checksum: ByteBufChecksum;
    // private compressedLength: number;
    // private currentChecksum: number;
    // private currentState: Lz4FrameDecoder$State;
    // private decompressedLength: number;
    // private decompressor: LZ4FastDecompressor;
    // private maxDecompressedLength: number;
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    isClosed(): boolean;
}