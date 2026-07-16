import type { Ops } from '../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class BooleanArrayType extends Type<boolean[]> {
    constructor()
    constructor(arg0: number)
    // private length: number;
    read(arg0: ByteBuf): boolean[];
    write(arg0: Ops, arg1: boolean[]): void;
    write(arg0: ByteBuf, arg1: boolean[]): void;
}