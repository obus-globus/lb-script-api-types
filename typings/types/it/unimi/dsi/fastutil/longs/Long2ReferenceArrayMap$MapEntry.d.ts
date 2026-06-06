import type { Long2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ReferenceMap$Entry.d.ts'
import type { LongReferencePair } from '../../../../../it/unimi/dsi/fastutil/longs/LongReferencePair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Long2ReferenceArrayMap$MapEntry extends Object implements Long2ReferenceMap$Entry<V>, LongReferencePair<V>, Map$Entry<number, V> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static of(paramarg0: number, paramarg1: Object | null): LongReferencePair<Object>;
    constructor(null_: Long2ReferenceArrayMap$MapEntry)
    constructor(null_: Long2ReferenceArrayMap$MapEntry, arg1: number)
    // private index: number;
    readonly value: V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): LongReferencePair<V>;
    firstLong(): number;
    getLongKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): LongReferencePair<V>;
    keyLong(): number;
    left(): number;
    left(arg0: number): LongReferencePair<V>;
    leftLong(): number;
    right<V extends Object | number | string | boolean>(): V;
    right<V extends Object | number | string | boolean>(arg0: V): LongReferencePair<V>;
    setValue<V extends Object | number | string | boolean>(arg0: V): V;
    toString(): string;
}