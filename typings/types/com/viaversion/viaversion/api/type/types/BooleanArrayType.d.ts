import type { Ops } from '../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BooleanArrayType extends Type<(Object | null)[]> {
    constructor()
    constructor(arg0: number)
    // private length: number;
    read(arg0: ByteBuf): (Object | null)[];
    write(arg0: Ops, arg1: (Object | null)[]): void;
    write(arg0: ByteBuf, arg1: (Object | null)[]): void;
}