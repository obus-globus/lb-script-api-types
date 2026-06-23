import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class Consumable1_21_2$ConsumeEffect<T extends unknown> extends Record {
    static ARRAY_TYPE: Type<Object>;
    static TYPE: Type<Consumable1_21_2$ConsumeEffect<Object>>;
    // private id: number;
    // private type: Type<T>;
    // private value: T;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    id(): number;
    toString(): string;
    type(): Type<T>;
    value(): T;
    writeValue(arg0: ByteBuf): void;
}