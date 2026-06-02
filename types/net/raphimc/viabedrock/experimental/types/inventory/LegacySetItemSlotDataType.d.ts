import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { LegacySetItemSlotData } from '../../../../../../net/raphimc/viabedrock/experimental/model/inventory/LegacySetItemSlotData.d.ts'
export class LegacySetItemSlotDataType extends Type<LegacySetItemSlotData> {
    constructor()
    read(arg0: ByteBuf): LegacySetItemSlotData;
    write(arg0: ByteBuf, arg1: LegacySetItemSlotData): void;
}