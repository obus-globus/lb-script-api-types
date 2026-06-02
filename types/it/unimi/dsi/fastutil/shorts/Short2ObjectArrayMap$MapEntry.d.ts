import type { Short2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ObjectMap$Entry.d.ts'
import type { ShortObjectPair } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortObjectPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Short2ObjectArrayMap$MapEntry extends Object implements Short2ObjectMap$Entry<V>, ShortObjectPair<V>, Map$Entry<number, V> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: Object | null) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: Object | null): ShortObjectPair<Object>;
    constructor(null_: Short2ObjectArrayMap$MapEntry)
    constructor(null_: Short2ObjectArrayMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: number;
    readonly value: V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ShortObjectPair<V>;
    first(arg0: number): ShortObjectPair<V>;
    firstShort(): number;
    getShortKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ShortObjectPair<V>;
    key(arg0: number): ShortObjectPair<V>;
    keyShort(): number;
    left(): number;
    left(arg0: number): ShortObjectPair<V>;
    left(arg0: number): ShortObjectPair<V>;
    leftShort(): number;
    right<V extends Object | number | string | boolean>(): V;
    right<V extends Object | number | string | boolean>(arg0: V): ShortObjectPair<V>;
    setValue<V extends Object | number | string | boolean>(arg0: V): V;
    toString(): string;
}