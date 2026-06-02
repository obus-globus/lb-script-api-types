import type { Byte2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ObjectMap$Entry.d.ts'
import type { ByteObjectPair } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteObjectPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Byte2ObjectOpenCustomHashMap$MapEntry extends Object implements Byte2ObjectMap$Entry<V>, ByteObjectPair<V>, Map$Entry<number, V> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: Object | null) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: Object | null): ByteObjectPair<Object>;
    constructor(null_: Byte2ObjectOpenCustomHashMap$MapEntry)
    constructor(null_: Byte2ObjectOpenCustomHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: number;
    readonly value: V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ByteObjectPair<V>;
    first(arg0: number): ByteObjectPair<V>;
    firstByte(): number;
    getByteKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ByteObjectPair<V>;
    key(arg0: number): ByteObjectPair<V>;
    keyByte(): number;
    left(): number;
    left(arg0: number): ByteObjectPair<V>;
    left(arg0: number): ByteObjectPair<V>;
    leftByte(): number;
    right<V extends Object | number | string | boolean>(): V;
    right<V extends Object | number | string | boolean>(arg0: V): ByteObjectPair<V>;
    setValue<V extends Object | number | string | boolean>(arg0: V): V;
    toString(): string;
}