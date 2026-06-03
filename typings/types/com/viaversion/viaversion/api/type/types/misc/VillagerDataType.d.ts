import type { VillagerData } from '../../../../../../../com/viaversion/viaversion/api/minecraft/VillagerData.d.ts'
import type { Ops } from '../../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class VillagerDataType extends Type<VillagerData> {
    constructor()
    read(arg0: ByteBuf): VillagerData;
    write(arg0: Ops, arg1: VillagerData): void;
    write(arg0: ByteBuf, arg1: VillagerData): void;
}