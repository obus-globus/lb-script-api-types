import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PacketCompressionAlgorithm } from '../../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/PacketCompressionAlgorithm.d.ts'
export interface CompressionAlgorithm extends Object{
    compress(arg0: ByteBuf, arg1: ByteBuf): void;
    decompress(arg0: ByteBuf, arg1: ByteBuf): void;
    end(): void;
    getAlgorithm(): PacketCompressionAlgorithm;
}