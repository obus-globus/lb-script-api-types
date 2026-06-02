import type { Ops } from '../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Unit } from '../../../../../../com/viaversion/viaversion/util/Unit.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class EmptyType extends Type<Unit> {
    constructor()
    read(arg0: ByteBuf): Unit;
    write(arg0: Ops, arg1: Unit): void;
    write(arg0: ByteBuf, arg1: Unit): void;
}