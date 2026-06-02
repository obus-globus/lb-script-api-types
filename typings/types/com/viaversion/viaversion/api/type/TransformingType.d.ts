import type { Ops } from '../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TransformingType<F extends Object | number | string | boolean, T extends Object | number | string | boolean> extends Type<T> {
    static of(paramarg0: Type<Object>, paramarg1: Class<Object>, paramarg2: (param0: Object | null) => Object | null, paramarg3: (param0: Object | null) => Object | null): Type<Object>;
    constructor(arg0: Type<F>, arg1: Class<T>, arg2: (param0: F) => T, arg3: (param0: T) => F)
    // private from: Type<F>;
    // private mapFunction: (param0: F) => T;
    // private reverseFunction: (param0: T) => F;
    read(arg0: ByteBuf): T;
    write(arg0: Ops, arg1: T): void;
    write(arg0: ByteBuf, arg1: T): void;
}