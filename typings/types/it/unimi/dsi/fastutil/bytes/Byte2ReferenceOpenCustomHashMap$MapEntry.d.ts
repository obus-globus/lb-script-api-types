import type { Byte2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ReferenceMap$Entry.d.ts'
import type { ByteReferencePair } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteReferencePair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Byte2ReferenceOpenCustomHashMap$MapEntry extends Object implements Byte2ReferenceMap$Entry<V>, ByteReferencePair<V>, Map$Entry<number, V> {
    static comparingByKey(): (param0: Object) => boolean;
    static comparingByKey(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static comparingByValue(): (param0: Object) => boolean;
    static comparingByValue(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static of(paramarg0: number, paramarg1: Object | null): ByteReferencePair<Object>;
    constructor(null_: Byte2ReferenceOpenCustomHashMap$MapEntry)
    constructor(null_: Byte2ReferenceOpenCustomHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly value: V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first<V extends unknown>(arg0: number): ByteReferencePair<V>;
    firstByte(): number;
    getByteKey(): number;
    hashCode(): number;
    key(): number;
    key<V extends unknown>(arg0: number): ByteReferencePair<V>;
    keyByte(): number;
    left(): number;
    left<V extends unknown>(arg0: number): ByteReferencePair<V>;
    leftByte(): number;
    right<V extends unknown>(): V;
    right<V extends unknown>(arg0: V): ByteReferencePair<V>;
    setValue<V extends unknown>(arg0: V): V;
    toString(): string;
}