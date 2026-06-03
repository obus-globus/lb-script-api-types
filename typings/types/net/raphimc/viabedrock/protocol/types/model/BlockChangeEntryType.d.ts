import type { Ops } from '../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { BlockChangeEntry } from '../../../../../../net/raphimc/viabedrock/protocol/model/BlockChangeEntry.d.ts'
export class BlockChangeEntryType extends Type<BlockChangeEntry> {
    constructor()
    read(arg0: ByteBuf): BlockChangeEntry;
    write(arg0: Ops, arg1: BlockChangeEntry): void;
    write(arg0: ByteBuf, arg1: BlockChangeEntry): void;
}