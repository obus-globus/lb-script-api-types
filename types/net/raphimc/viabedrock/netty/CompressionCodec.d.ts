import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ByteToMessageCodec } from '../../../../io/netty/handler/codec/ByteToMessageCodec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CompressionAlgorithm } from '../../../../net/raphimc/viabedrock/api/io/compression/CompressionAlgorithm.d.ts'
import type { SnappyCompression } from '../../../../net/raphimc/viabedrock/api/io/compression/SnappyCompression.d.ts'
import type { ZLibCompression } from '../../../../net/raphimc/viabedrock/api/io/compression/ZLibCompression.d.ts'
import type { PacketCompressionAlgorithm } from '../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/PacketCompressionAlgorithm.d.ts'
export class CompressionCodec extends ByteToMessageCodec<ByteBuf> {
    constructor(arg0: PacketCompressionAlgorithm, arg1: number)
    // private preferredCompressionAlgorithm: CompressionAlgorithm;
    // private snappyCompression: SnappyCompression;
    // private threshold: number;
    // private zLibCompression: ZLibCompression;
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    encode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: ByteBuf): void;
    // private getCompressionAlgorithm(arg0: PacketCompressionAlgorithm): CompressionAlgorithm;
    handlerRemoved(arg0: ChannelHandlerContext): void;
}