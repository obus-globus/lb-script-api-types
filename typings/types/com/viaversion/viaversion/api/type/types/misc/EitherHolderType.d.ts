import type { EitherHolder } from '../../../../../../../com/viaversion/viaversion/api/minecraft/EitherHolder.d.ts'
import type { Ops } from '../../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { HolderType } from '../../../../../../../com/viaversion/viaversion/api/type/types/misc/HolderType.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class EitherHolderType<T extends unknown> extends Type<EitherHolder<T>> {
    static read(paramarg0: ByteBuf, paramarg1: HolderType<Object>): EitherHolder<Object>;
    static write(paramarg0: Ops, paramarg1: EitherHolder<Object>, paramarg2: HolderType<Object>): void;
    static write(paramarg0: ByteBuf, paramarg1: EitherHolder<Object>, paramarg2: HolderType<Object>): void;
    constructor(arg0: HolderType<T>)
    // private holderType: HolderType<T>;
    read(arg0: ByteBuf): EitherHolder<T>;
    write(arg0: Ops, arg1: EitherHolder<T>): void;
    write(arg0: ByteBuf, arg1: EitherHolder<T>): void;
}