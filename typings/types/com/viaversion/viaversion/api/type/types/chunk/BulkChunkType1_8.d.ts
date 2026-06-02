import type { Chunk } from '../../../../../../../com/viaversion/viaversion/api/minecraft/chunks/Chunk.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class BulkChunkType1_8 extends Type<Chunk[]> {
    static TYPE: Type<(Object | null)[]>;
    constructor()
    read(arg0: ByteBuf): Chunk[];
    write(arg0: ByteBuf, arg1: Chunk[]): void;
}