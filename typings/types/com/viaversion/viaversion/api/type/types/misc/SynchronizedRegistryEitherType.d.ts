import type { RegistryKey } from '../../../../../../../com/viaversion/viaversion/api/minecraft/RegistryKey.d.ts'
import type { Ops } from '../../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { EitherType } from '../../../../../../../com/viaversion/viaversion/api/type/types/EitherType.d.ts'
import type { Either } from '../../../../../../../com/viaversion/viaversion/util/Either.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class SynchronizedRegistryEitherType extends EitherType<number, string> {
    static read(paramarg0: ByteBuf, paramarg1: Type<Object>, paramarg2: Type<Object>): Either<Object, Object>;
    static write(paramarg0: ByteBuf, paramarg1: Either<Object, Object>, paramarg2: Type<Object>, paramarg3: Type<Object>): void;
    constructor(arg0: RegistryKey)
    // private registryKey: RegistryKey;
    write(arg0: Ops, arg1: Either<number, string>): void;
}