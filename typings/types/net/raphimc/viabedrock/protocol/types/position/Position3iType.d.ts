import type { BlockPosition } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { Ops } from '../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class Position3iType extends Type<BlockPosition> {
    constructor()
    read(arg0: ByteBuf): BlockPosition;
    write(arg0: Ops, arg1: BlockPosition): void;
    write(arg0: ByteBuf, arg1: BlockPosition): void;
}