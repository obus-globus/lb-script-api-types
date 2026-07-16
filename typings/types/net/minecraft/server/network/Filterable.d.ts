import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { FilteredText } from '../../../../net/minecraft/server/network/FilteredText.d.ts'
export class Filterable<T extends unknown> extends Record {
    static codec<T extends unknown>(paramvalueCodec: Codec<T>): Codec<Filterable<T>>;
    static from(paramtext: FilteredText): Filterable<string>;
    static passThrough<T extends unknown>(paramvalue: T): Filterable<T>;
    static streamCodec<B extends ByteBuf, T extends unknown>(paramvalueCodec: StreamCodec<B, T>): StreamCodec<B, Filterable<T>>;
    constructor(raw: T, filtered: Optional<T>)
    // private filtered: Optional<T>;
    // private raw: T;
    equals(o: Object | null): boolean;
    filtered(): Optional<T>;
    get(filterEnabled: boolean): T;
    hashCode(): number;
    map<U extends unknown>(function_: (param0: T) => U): Filterable<U>;
    raw(): T;
    resolve<U extends unknown>(function_: (param0: T) => Optional<U>): Optional<Filterable<U>>;
    toString(): string;
}