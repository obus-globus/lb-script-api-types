import type { Ops } from '../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { ByteBufReader } from '../../../../../com/viaversion/viaversion/api/type/ByteBufReader.d.ts'
import type { ByteBufWriter } from '../../../../../com/viaversion/viaversion/api/type/ByteBufWriter.d.ts'
import type { CodecWriter } from '../../../../../com/viaversion/viaversion/api/type/CodecWriter.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Type<T extends Object | number | string | boolean> extends Object implements ByteBufReader<T>, ByteBufWriter<T>, CodecWriter<T> {
    constructor(arg0: Class<T>)
    constructor(arg0: string, arg1: Class<T>)
    readonly outputClass: Class<T>;
    readonly typeName: string;
    getBaseClass(): Class<Type<Object>>;
    getOutputClass(): Class<T>;
    getTypeName(): string;
    toString(): string;
    write(arg0: Ops, arg1: T): void;
}