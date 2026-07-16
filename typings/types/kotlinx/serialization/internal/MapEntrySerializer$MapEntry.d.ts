import type { Comparator } from '../../../java/util/Comparator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
export class MapEntrySerializer$MapEntry<K extends unknown, V extends unknown> extends Object implements Map$Entry<K, V> {
    static comparingByKey<K extends Comparable<Object>, V extends unknown>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByKey<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends Comparable<Object>>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static copyOf<K extends unknown, V extends unknown>(paramarg0: Map$Entry<K, V>): Map$Entry<K, V>;
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