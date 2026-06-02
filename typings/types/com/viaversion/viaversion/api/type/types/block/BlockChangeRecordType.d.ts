import type { BlockChangeRecord } from '../../../../../../../com/viaversion/viaversion/api/minecraft/BlockChangeRecord.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class BlockChangeRecordType extends Type<BlockChangeRecord> {
    constructor()
    read(arg0: ByteBuf): BlockChangeRecord;
    write(arg0: ByteBuf, arg1: BlockChangeRecord): void;
}