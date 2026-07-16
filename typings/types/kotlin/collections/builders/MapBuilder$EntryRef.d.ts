import type { Comparator } from '../../../java/util/Comparator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
export class MapBuilder$EntryRef<K extends unknown, V extends unknown> extends Object implements Map$Entry<K, V> {
    static comparingByKey(): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static comparingByKey(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static comparingByValue(): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static comparingByValue(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
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