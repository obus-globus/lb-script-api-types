import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CompressionAlgorithm } from '../../../../../../net/raphimc/viabedrock/api/io/compression/CompressionAlgorithm.d.ts'
import type { PacketCompressionAlgorithm } from '../../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/PacketCompressionAlgorithm.d.ts'
export class NoopCompression extends Object implements CompressionAlgorithm {
    static INSTANCE: NoopCompression;
    constructor()
    compress(arg0: ByteBuf, arg1: ByteBuf): void;
    decompress(arg0: ByteBuf, arg1: ByteBuf): void;
    end(): void;
    getAlgorithm(): PacketCompressionAlgorithm;
}