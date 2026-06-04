import type { Long2ObjectMap$Entry } from '../../../../../../com/viaversion/viaversion/libs/fastutil/longs/Long2ObjectMap$Entry.d.ts'
import type { LongObjectPair } from '../../../../../../com/viaversion/viaversion/libs/fastutil/longs/LongObjectPair.d.ts'
import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class Long2ObjectOpenHashMap$MapEntry extends Object implements Long2ObjectMap$Entry<V>, LongObjectPair<V>, Map$Entry<number, V> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: Object | null) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: Object | null): LongObjectPair<Object>;
    constructor(null_: Long2ObjectOpenHashMap$MapEntry)
    constructor(null_: Long2ObjectOpenHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: number;
    readonly value: V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): LongObjectPair<V>;
    firstLong(): number;
    getLongKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): LongObjectPair<V>;
    keyLong(): number;
    left(): number;
    left(arg0: number): LongObjectPair<V>;
    leftLong(): number;
    right<V extends Object | number | string | boolean>(): V;
    right<V extends Object | number | string | boolean>(arg0: V): LongObjectPair<V>;
    setValue<V extends Object | number | string | boolean>(arg0: V): V;
    toString(): string;
}