import type { Ops } from '../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Position2f } from '../../../../../../net/raphimc/viabedrock/protocol/model/Position2f.d.ts'
export class Position2fType extends Type<Position2f> {
    constructor()
    read(arg0: ByteBuf): Position2f;
    write(arg0: Ops, arg1: Position2f): void;
    write(arg0: ByteBuf, arg1: Position2f): void;
}