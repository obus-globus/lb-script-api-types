import type { Ops } from '../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ArrayType<T extends unknown> extends Type<T[]> {
    static getArrayClass(paramarg0: Class<Object>): Class<Object>;
    constructor(arg0: Type<T>)
    constructor(arg0: Type<T>, arg1: number)
    private constructor(arg0: Class<T[]>, arg1: Type<T>, arg2: number)
    // private elementType: Type<T>;
    // private maxLength: number;
    // private createArray(arg0: number): T[];
    read(arg0: ByteBuf): T[];
    // private readArray(arg0: ByteBuf, arg1: number): T[];
    // private readList(arg0: ByteBuf, arg1: number): T[];
    withMaxLength(arg0: number): ArrayType<T>;
    write(arg0: Ops, arg1: T[]): void;
    write(arg0: ByteBuf, arg1: T[]): void;
}