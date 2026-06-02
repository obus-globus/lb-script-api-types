import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Deflater } from '../../../../../../java/util/zip/Deflater.d.ts'
import type { Inflater } from '../../../../../../java/util/zip/Inflater.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CompressionAlgorithm } from '../../../../../../net/raphimc/viabedrock/api/io/compression/CompressionAlgorithm.d.ts'
import type { PacketCompressionAlgorithm } from '../../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/PacketCompressionAlgorithm.d.ts'
export class ZLibCompression extends Object implements CompressionAlgorithm {
    constructor()
    // private deflateBuffer: number[];
    // private deflater: Deflater;
    // private inflateBuffer: number[];
    // private inflater: Inflater;
    compress(arg0: ByteBuf, arg1: ByteBuf): void;
    decompress(arg0: ByteBuf, arg1: ByteBuf): void;
    end(): void;
    end(): void;
    getAlgorithm(): PacketCompressionAlgorithm;
}