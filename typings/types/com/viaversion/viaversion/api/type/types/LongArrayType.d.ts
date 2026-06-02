import type { Ops } from '../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class LongArrayType extends Type<number[]> {
    static readFixedLength(paramarg0: ByteBuf, paramarg1: number): number[];
    static writeFixedLength(paramarg0: ByteBuf, paramarg1: number[]): void;
    constructor()
    constructor(arg0: number)
    // private length: number;
    read(arg0: ByteBuf): number[];
    write(arg0: Ops, arg1: number[]): void;
    write(arg0: ByteBuf, arg1: number[]): void;
}