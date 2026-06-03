import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { BulkChunkType as BulkChunkType_2 } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_7_6_10tor1_8/types/BulkChunkType.d.ts'
export class BulkChunkType extends BulkChunkType_2 {
    constructor()
    readHasSkyLight(arg0: ByteBuf): boolean;
    writeHasSkyLight(arg0: ByteBuf, arg1: boolean): void;
}