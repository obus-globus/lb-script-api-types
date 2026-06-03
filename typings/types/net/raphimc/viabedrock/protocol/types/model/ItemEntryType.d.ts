import type { Ops } from '../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ItemEntry } from '../../../../../../net/raphimc/viabedrock/protocol/model/ItemEntry.d.ts'
export class ItemEntryType extends Type<ItemEntry> {
    constructor()
    read(arg0: ByteBuf): ItemEntry;
    write(arg0: Ops, arg1: ItemEntry): void;
    write(arg0: ByteBuf, arg1: ItemEntry): void;
}