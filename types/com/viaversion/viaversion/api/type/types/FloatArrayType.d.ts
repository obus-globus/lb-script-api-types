import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class FloatArrayType extends Type<number[]> {
    constructor()
    constructor(arg0: number)
    // private length: number;
    read(arg0: ByteBuf): number[];
    write(arg0: ByteBuf, arg1: number[]): void;
}