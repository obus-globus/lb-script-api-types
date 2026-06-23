import type { Ops } from '../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class OptionalType<T extends unknown> extends Type<T> {
    constructor(arg0: Type<T>)
    // private type: Type<T>;
    read(arg0: ByteBuf): T;
    write(arg0: Ops, arg1: T): void;
    write(arg0: ByteBuf, arg1: T): void;
}