import type { BlockChangeRecord } from '../../../../../../../com/viaversion/viaversion/api/minecraft/BlockChangeRecord.d.ts'
import type { Ops } from '../../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class BlockChangeRecordArrayType extends Type<BlockChangeRecord[]> {
    constructor()
    read(arg0: ByteBuf): BlockChangeRecord[];
    write(arg0: Ops, arg1: BlockChangeRecord[]): void;
    write(arg0: ByteBuf, arg1: BlockChangeRecord[]): void;
}