import type { BlockEntity } from '../../../../../../../com/viaversion/viaversion/api/minecraft/blockentity/BlockEntity.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class BlockEntityType1_20_2 extends Type<BlockEntity> {
    constructor()
    read(arg0: ByteBuf): BlockEntity;
    write(arg0: ByteBuf, arg1: BlockEntity): void;
}