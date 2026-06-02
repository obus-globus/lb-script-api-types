import type { ChunkPosition } from '../../../../../../../com/viaversion/viaversion/api/minecraft/ChunkPosition.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class ChunkPositionType extends Type<ChunkPosition> {
    constructor()
    read(arg0: ByteBuf): ChunkPosition;
    write(arg0: ByteBuf, arg1: ChunkPosition): void;
}