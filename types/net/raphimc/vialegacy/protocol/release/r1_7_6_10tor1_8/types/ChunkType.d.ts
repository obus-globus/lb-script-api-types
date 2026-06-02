import type { Chunk } from '../../../../../../../com/viaversion/viaversion/api/minecraft/chunks/Chunk.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Pair } from '../../../../../../../com/viaversion/viaversion/util/Pair.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ChunkType extends Type<Chunk> {
    static deserialize(paramarg0: number, paramarg1: number, paramarg2: boolean, paramarg3: boolean, paramarg4: number, paramarg5: number, paramarg6: number[]): Chunk;
    static getSize(paramarg0: (Object | null)[], paramarg1: number, paramarg2: boolean): number;
    static getSize(paramarg0: number, paramarg1: number, paramarg2: boolean, paramarg3: boolean): number;
    static serialize(paramarg0: Chunk): Pair<number[], number>;
    constructor(arg0: boolean)
    // private hasSkyLight: boolean;
    read(arg0: ByteBuf): Chunk;
    readUnusedInt(arg0: ByteBuf): void;
    write(arg0: ByteBuf, arg1: Chunk): void;
    writeUnusedInt(arg0: ByteBuf, arg1: Chunk): void;
}