import type { Comparator } from '../../../java/util/Comparator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
export class MapBuilder$EntryRef<K extends unknown, V extends unknown> extends Object implements Map$Entry<K, V> {
    static comparingByKey<K extends Comparable<Object>, V extends unknown>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByKey<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends Comparable<Object>>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static copyOf<K extends unknown, V extends unknown>(paramarg0: Map$Entry<K, V>): Map$Entry<K, V>;
    constructor(map: Map<K, V>, index: number)
    // private expectedModCount: number;
    // private index: number;
    readonly key: K;
    // private map: Map<K, V>;
    readonly value: V;
    // private checkForComodification(): void;
    equals(other: Object | null): boolean;
    hashCode(): number;
    setValue(newValue: V): V;
    toString(): string;
}