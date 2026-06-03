import type { Ops } from '../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { InventorySource } from '../../../../../../net/raphimc/viabedrock/experimental/model/inventory/InventorySource.d.ts'
export class InventorySourcePacketType extends Type<InventorySource> {
    constructor()
    read(arg0: ByteBuf): InventorySource;
    write(arg0: Ops, arg1: InventorySource): void;
    write(arg0: ByteBuf, arg1: InventorySource): void;
}