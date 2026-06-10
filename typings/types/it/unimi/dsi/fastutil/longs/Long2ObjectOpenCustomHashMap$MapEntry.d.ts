import type { Long2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ObjectMap$Entry.d.ts'
import type { LongObjectPair } from '../../../../../it/unimi/dsi/fastutil/longs/LongObjectPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Long2ObjectOpenCustomHashMap$MapEntry extends Object implements Long2ObjectMap$Entry<V>, LongObjectPair<V>, Map$Entry<number, V> {
    static comparingByKey(): (param0: Object) => boolean;
    static comparingByKey(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static comparingByValue(): (param0: Object) => boolean;
    static comparingByValue(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: Object) => boolean;
    static of(paramarg0: number, paramarg1: Object | null): LongObjectPair<Object>;
    constructor(null_: Long2ObjectOpenCustomHashMap$MapEntry)
    constructor(null_: Long2ObjectOpenCustomHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly value: V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first<V extends Object | number | string | boolean>(arg0: number): LongObjectPair<V>;
    firstLong(): number;
    getLongKey(): number;
    hashCode(): number;
    key(): number;
    key<V extends Object | number | string | boolean>(arg0: number): LongObjectPair<V>;
    keyLong(): number;
    left(): number;
    left<V extends Object | number | string | boolean>(arg0: number): LongObjectPair<V>;
    leftLong(): number;
    right<V extends Object | number | string | boolean>(): V;
    right<V extends Object | number | string | boolean>(arg0: V): LongObjectPair<V>;
    setValue<V extends Object | number | string | boolean>(arg0: V): V;
    toString(): string;
}