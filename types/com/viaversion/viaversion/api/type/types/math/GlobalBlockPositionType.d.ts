import type { GlobalBlockPosition } from '../../../../../../../com/viaversion/viaversion/api/minecraft/GlobalBlockPosition.d.ts'
import type { Ops } from '../../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class GlobalBlockPositionType extends Type<GlobalBlockPosition> {
    constructor()
    read(arg0: ByteBuf): GlobalBlockPosition;
    write(arg0: Ops, arg1: GlobalBlockPosition): void;
    write(arg0: ByteBuf, arg1: GlobalBlockPosition): void;
}