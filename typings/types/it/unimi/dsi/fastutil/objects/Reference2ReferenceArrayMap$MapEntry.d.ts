import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Reference2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ReferenceMap$Entry.d.ts'
import type { ReferenceReferencePair } from '../../../../../it/unimi/dsi/fastutil/objects/ReferenceReferencePair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Reference2ReferenceArrayMap$MapEntry extends Object implements Reference2ReferenceMap$Entry<K, V>, ReferenceReferencePair<K, V>, Map$Entry<K, V> {
    static comparingByKey(): (param0: Object) => boolean;
    static comparingByKey(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static comparingByValue(): (param0: Object) => boolean;
    static comparingByValue(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static of(paramarg0: Object | null, paramarg1: Object | null): ReferenceReferencePair<Object, Object>;
    constructor(null_: Reference2ReferenceArrayMap$MapEntry)
    constructor(null_: Reference2ReferenceArrayMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: K;
    readonly value: V;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left<K extends unknown>(): K;
    left<K extends unknown, V extends unknown>(arg0: K): Pair<K, V>;
    right<V extends unknown>(): V;
    right<K extends unknown, V extends unknown>(arg0: V): ReferenceReferencePair<K, V>;
    setValue<V extends unknown>(arg0: V): V;
    toString(): string;
}