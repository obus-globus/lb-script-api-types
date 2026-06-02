import type { Ops } from '../../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Filterable } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/data/Filterable.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class Filterable$FilterableType<T extends Object | number | string | boolean, F extends Filterable<T>> extends Type<F> {
    constructor(arg0: Type<T>, arg1: Type<T>, arg2: Class<F>)
    // private elementType: Type<T>;
    // private optionalElementType: Type<T>;
    create(arg0: T, arg1: T): F;
    read(arg0: ByteBuf): F;
    write(arg0: Ops, arg1: F): void;
    write(arg0: ByteBuf, arg1: F): void;
}