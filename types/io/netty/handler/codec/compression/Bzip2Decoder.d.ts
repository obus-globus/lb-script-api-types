import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ByteToMessageDecoder } from '../../../../../io/netty/handler/codec/ByteToMessageDecoder.d.ts'
import type { ByteToMessageDecoder$Cumulator } from '../../../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { Bzip2BitReader } from '../../../../../io/netty/handler/codec/compression/Bzip2BitReader.d.ts'
import type { Bzip2BlockDecompressor } from '../../../../../io/netty/handler/codec/compression/Bzip2BlockDecompressor.d.ts'
import type { Bzip2Decoder$State } from '../../../../../io/netty/handler/codec/compression/Bzip2Decoder$State.d.ts'
import type { Bzip2HuffmanStageDecoder } from '../../../../../io/netty/handler/codec/compression/Bzip2HuffmanStageDecoder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Bzip2Decoder extends ByteToMessageDecoder {
    static COMPOSITE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static MERGE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    constructor()
    // private blockCRC: number;
    // private blockDecompressor: Bzip2BlockDecompressor;
    // private blockSize: number;
    // private currentState: Bzip2Decoder$State;
    // private huffmanStageDecoder: Bzip2HuffmanStageDecoder;
    // private reader: Bzip2BitReader;
    // private streamCRC: number;
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    isClosed(): boolean;
}