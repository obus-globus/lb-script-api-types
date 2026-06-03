import type { EulerAngle } from '../../../../../../../com/viaversion/viaversion/api/minecraft/EulerAngle.d.ts'
import type { Ops } from '../../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class EulerAngleType extends Type<EulerAngle> {
    constructor()
    read(arg0: ByteBuf): EulerAngle;
    write(arg0: Ops, arg1: EulerAngle): void;
    write(arg0: ByteBuf, arg1: EulerAngle): void;
}