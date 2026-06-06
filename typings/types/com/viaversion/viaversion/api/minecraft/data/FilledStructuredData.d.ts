import type { StructuredData } from '../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredData.d.ts'
import type { StructuredDataKey } from '../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataKey.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class FilledStructuredData<T extends Object | number | string | boolean> extends Object implements StructuredData<T> {
    static empty(paramarg0: StructuredDataKey<Object>, paramarg1: number): StructuredData<Object>;
    static of(paramarg0: StructuredDataKey<Object>, paramarg1: Object | null, paramarg2: number): StructuredData<Object>;
    constructor(arg0: StructuredDataKey<T>, arg1: T, arg2: number)
    // private key: StructuredDataKey<T>;
    copy(): StructuredData<T>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    id(): number;
    isEmpty(): boolean;
    isPresent(): boolean;
    key(): StructuredDataKey<T>;
    setId(arg0: number): void;
    setValue(arg0: T): void;
    toString(): string;
    value(): T;
    write(arg0: ByteBuf): void;
}