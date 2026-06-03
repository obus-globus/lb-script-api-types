import type { Quaternion } from '../../../../../../../com/viaversion/viaversion/api/minecraft/Quaternion.d.ts'
import type { Ops } from '../../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class QuaternionType extends Type<Quaternion> {
    constructor()
    read(arg0: ByteBuf): Quaternion;
    write(arg0: Ops, arg1: Quaternion): void;
    write(arg0: ByteBuf, arg1: Quaternion): void;
}