import type { Synchronized$SynchronizedObject } from '../../../../com/google/common/collect/Synchronized$SynchronizedObject.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class Synchronized$SynchronizedEntry<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Synchronized$SynchronizedObject implements Map$Entry<K, V> {
    static comparingByKey(): (param0: Object) => boolean;
    static comparingByKey(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static comparingByValue(): (param0: Object) => boolean;
    static comparingByValue(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    constructor(delegate: Map$Entry<K, V>, mutex: Object)
    readonly key: K;
    readonly value: V;
    delegate(): Map$Entry<K, V>;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    setValue(value: V): V;
}