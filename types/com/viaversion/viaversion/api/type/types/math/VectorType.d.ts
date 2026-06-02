import type { Vector } from '../../../../../../../com/viaversion/viaversion/api/minecraft/Vector.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class VectorType extends Type<Vector> {
    constructor()
    read(arg0: ByteBuf): Vector;
    write(arg0: ByteBuf, arg1: Vector): void;
}