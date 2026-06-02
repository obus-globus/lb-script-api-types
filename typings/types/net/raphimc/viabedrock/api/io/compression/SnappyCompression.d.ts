import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Snappy } from '../../../../../../io/netty/handler/codec/compression/Snappy.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CompressionAlgorithm } from '../../../../../../net/raphimc/viabedrock/api/io/compression/CompressionAlgorithm.d.ts'
import type { PacketCompressionAlgorithm } from '../../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/PacketCompressionAlgorithm.d.ts'
export class SnappyCompression extends Object implements CompressionAlgorithm {
    constructor()
    // private snappy: Snappy;
    compress(arg0: ByteBuf, arg1: ByteBuf): void;
    decompress(arg0: ByteBuf, arg1: ByteBuf): void;
    end(): void;
    getAlgorithm(): PacketCompressionAlgorithm;
}