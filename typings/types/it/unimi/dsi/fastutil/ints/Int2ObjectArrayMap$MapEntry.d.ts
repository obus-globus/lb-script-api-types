import type { Int2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ObjectMap$Entry.d.ts'
import type { IntObjectPair } from '../../../../../it/unimi/dsi/fastutil/ints/IntObjectPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Int2ObjectArrayMap$MapEntry extends Object implements Int2ObjectMap$Entry<V>, IntObjectPair<V>, Map$Entry<number, V> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    getKey(): number;
    readonly value: V;
    getValue(): V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first<V extends unknown>(arg0: number): IntObjectPair<V>;
    firstInt(): number;
    getIntKey(): number;
    hashCode(): number;
    key(): number;
    key<V extends unknown>(arg0: number): IntObjectPair<V>;
    keyInt(): number;
    left(): number;
    left<V extends unknown>(arg0: number): IntObjectPair<V>;
    leftInt(): number;
    right<V extends unknown>(): V;
    right<V extends unknown>(arg0: V): IntObjectPair<V>;
    setValue<V extends unknown>(arg0: V): V;
    toString(): string;
}