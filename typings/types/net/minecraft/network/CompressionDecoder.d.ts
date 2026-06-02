import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ByteToMessageDecoder } from '../../../io/netty/handler/codec/ByteToMessageDecoder.d.ts'
import type { ByteToMessageDecoder$Cumulator } from '../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { Inflater } from '../../../java/util/zip/Inflater.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CompressionDecoder extends ByteToMessageDecoder {
    static COMPOSITE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static MAXIMUM_COMPRESSED_LENGTH: number;
    static MAXIMUM_UNCOMPRESSED_LENGTH: number;
    static MERGE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    constructor(threshold: number, validateDecompressed: boolean)
    // private inflater: Inflater;
    readonly threshold: number;
    // private validateDecompressed: boolean;
    decode(ctx: ChannelHandlerContext, in_: ByteBuf, out: Object[]): void;
    // private inflate(ctx: ChannelHandlerContext, uncompressedLength: number): ByteBuf;
    setThreshold(threshold: number, validateDecompressed: boolean): void;
    // private setupInflaterInput(in_: ByteBuf): void;
}