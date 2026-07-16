import type { Ops } from '../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Either } from '../../../../../../com/viaversion/viaversion/util/Either.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class EitherType<T extends unknown, V extends unknown> extends Type<Either<T, V>> {
    static read<X extends unknown, Y extends unknown>(paramarg0: ByteBuf, paramarg1: Type<X>, paramarg2: Type<Y>): Either<X, Y>;
    static write<X extends unknown, Y extends unknown>(paramarg0: ByteBuf, paramarg1: Either<X, Y>, paramarg2: Type<X>, paramarg3: Type<Y>): void;
    constructor(arg0: Type<T>, arg1: Type<V>)
    // private leftType: Type<T>;
    // private rightType: Type<V>;
    read(arg0: ByteBuf): Either<T, V>;
    write(arg0: Ops, arg1: Either<T, V>): void;
    write(arg0: ByteBuf, arg1: Either<T, V>): void;
}