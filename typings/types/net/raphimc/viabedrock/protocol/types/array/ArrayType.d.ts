import type { Ops } from '../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../java/lang/Number.d.ts'
export class ArrayType<T extends Object | number | string | boolean> extends Type<T[]> {
    constructor(arg0: Type<T>, arg1: Type<Number>)
    // private elementType: Type<T>;
    // private lengthType: Type<Number>;
    read(arg0: ByteBuf): T[];
    write(arg0: Ops, arg1: T[]): void;
    write(arg0: ByteBuf, arg1: T[]): void;
}