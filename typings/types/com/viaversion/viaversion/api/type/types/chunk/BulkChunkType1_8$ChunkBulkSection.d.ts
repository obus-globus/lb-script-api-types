import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class BulkChunkType1_8$ChunkBulkSection extends Object {
    constructor(arg0: ByteBuf, arg1: boolean)
    // private bitmask: number;
    // private chunkX: number;
    // private chunkZ: number;
    // private data: number[];
    bitmask(): number;
    chunkX(): number;
    chunkZ(): number;
    data(): number[];
    readData(arg0: ByteBuf): void;
}