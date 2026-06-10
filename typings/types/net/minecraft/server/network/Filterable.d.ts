import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { FilteredText } from '../../../../net/minecraft/server/network/FilteredText.d.ts'
export class Filterable<T extends Object | number | string | boolean> extends Record {
    static codec(paramvalueCodec: Codec<Object>): Codec<Filterable<Object>>;
    static from(paramtext: FilteredText): Filterable<string>;
    static passThrough(paramvalue: Object | null): Filterable<Object>;
    static streamCodec(paramvalueCodec: StreamCodec<ByteBuf, Object>): StreamCodec<ByteBuf, Filterable<Object>>;
    constructor(raw: T, filtered: Optional<T>)
    // private filtered: Optional<T>;
    // private raw: T;
    equals(o: Object | null): boolean;
    filtered(): Optional<T>;
    get(filterEnabled: boolean): T;
    hashCode(): number;
    map<U extends Object | number | string | boolean>(function_: (param0: T) => U): Filterable<U>;
    raw(): T;
    resolve<U extends Object | number | string | boolean>(function_: (param0: T) => Optional<U>): Optional<Filterable<U>>;
    toString(): string;
}