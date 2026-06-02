import type { Vector3f } from '../../../../../../../com/viaversion/viaversion/api/minecraft/Vector3f.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class Vector3fType extends Type<Vector3f> {
    constructor()
    read(arg0: ByteBuf): Vector3f;
    write(arg0: ByteBuf, arg1: Vector3f): void;
}