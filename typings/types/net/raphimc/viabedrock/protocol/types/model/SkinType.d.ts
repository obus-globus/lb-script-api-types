import type { Ops } from '../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { SkinData } from '../../../../../../net/raphimc/viabedrock/protocol/model/SkinData.d.ts'
export class SkinType extends Type<SkinData> {
    constructor()
    read(arg0: ByteBuf): SkinData;
    write(arg0: Ops, arg1: SkinData): void;
    write(arg0: ByteBuf, arg1: SkinData): void;
}