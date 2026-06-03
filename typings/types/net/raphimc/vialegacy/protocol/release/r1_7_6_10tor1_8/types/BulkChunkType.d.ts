import type { Chunk } from '../../../../../../../com/viaversion/viaversion/api/minecraft/chunks/Chunk.d.ts'
import type { Ops } from '../../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class BulkChunkType extends Type<Chunk[]> {
    constructor()
    read(arg0: ByteBuf): Chunk[];
    readHasSkyLight(arg0: ByteBuf): boolean;
    write(arg0: Ops, arg1: Chunk[]): void;
    write(arg0: ByteBuf, arg1: Chunk[]): void;
    writeHasSkyLight(arg0: ByteBuf, arg1: boolean): void;
}