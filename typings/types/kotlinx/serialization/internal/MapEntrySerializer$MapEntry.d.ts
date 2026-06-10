import type { Comparator } from '../../../java/util/Comparator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
export class MapEntrySerializer$MapEntry<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object implements Map$Entry<K, V> {
    static comparingByKey(): (param0: Object) => boolean;
    static comparingByKey(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static comparingByValue(): (param0: Object) => boolean;
    static comparingByValue(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    constructor(key: K, value: V)
    readonly key: K;
    readonly value: V;
    component1(): K;
    component2(): V;
    copy(key: K, value: V): MapEntrySerializer$MapEntry<K, V>;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}