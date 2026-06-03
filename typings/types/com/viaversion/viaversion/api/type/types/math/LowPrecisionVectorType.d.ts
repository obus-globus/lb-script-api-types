import type { Vector3d } from '../../../../../../../com/viaversion/viaversion/api/minecraft/Vector3d.d.ts'
import type { Ops } from '../../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class LowPrecisionVectorType extends Type<Vector3d> {
    constructor()
    // private pack(arg0: number): number;
    read(arg0: ByteBuf): Vector3d;
    // private sanitize(arg0: number): number;
    // private unpack(arg0: number): number;
    write(arg0: Ops, arg1: Vector3d): void;
    write(arg0: ByteBuf, arg1: Vector3d): void;
}