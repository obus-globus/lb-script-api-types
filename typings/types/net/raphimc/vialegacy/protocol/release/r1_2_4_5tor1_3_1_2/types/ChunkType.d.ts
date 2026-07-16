import type { Chunk } from '../../../../../../../com/viaversion/viaversion/api/minecraft/chunks/Chunk.d.ts'
import type { Ops } from '../../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Pair } from '../../../../../../../com/viaversion/viaversion/util/Pair.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ExtendedBlockStorage } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_7_6_10tor1_8/model/ExtendedBlockStorage.d.ts'
import type { ChunkType as ChunkType_2 } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_7_6_10tor1_8/types/ChunkType.d.ts'
export class ChunkType extends ChunkType_2 {
    static deserialize(paramarg0: number, paramarg1: number, paramarg2: boolean, paramarg3: boolean, paramarg4: number, paramarg5: number, paramarg6: number[]): Chunk;
    static getSize(paramarg0: ExtendedBlockStorage[], paramarg1: number, paramarg2: boolean): number;
    static getSize(paramarg0: number, paramarg1: number, paramarg2: boolean, paramarg3: boolean): number;
    static serialize(paramarg0: Chunk): Pair<number[], number>;
    constructor()
    readUnusedInt(arg0: ByteBuf): void;
    write(arg0: Ops, arg1: Chunk): void;
    write(arg0: ByteBuf, arg1: Chunk): void;
    writeUnusedInt(arg0: ByteBuf, arg1: Chunk): void;
}