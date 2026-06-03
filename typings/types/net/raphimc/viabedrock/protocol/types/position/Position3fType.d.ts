import type { Ops } from '../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Position3f } from '../../../../../../net/raphimc/viabedrock/protocol/model/Position3f.d.ts'
export class Position3fType extends Type<Position3f> {
    constructor()
    read(arg0: ByteBuf): Position3f;
    write(arg0: Ops, arg1: Position3f): void;
    write(arg0: ByteBuf, arg1: Position3f): void;
}