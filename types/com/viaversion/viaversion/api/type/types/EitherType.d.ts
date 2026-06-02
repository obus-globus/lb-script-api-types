import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Either } from '../../../../../../com/viaversion/viaversion/util/Either.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class EitherType<T extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Type<Either<T, V>> {
    static read(paramarg0: ByteBuf, paramarg1: Type<Object>, paramarg2: Type<Object>): Either<Object, Object>;
    static write(paramarg0: ByteBuf, paramarg1: Either<Object, Object>, paramarg2: Type<Object>, paramarg3: Type<Object>): void;
    constructor(arg0: Type<T>, arg1: Type<V>)
    // private leftType: Type<T>;
    // private rightType: Type<V>;
    read(arg0: ByteBuf): Either<T, V>;
    write(arg0: ByteBuf, arg1: Either<T, V>): void;
}