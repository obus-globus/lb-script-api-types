import type { Freezable } from '../../../../com/ibm/icu/util/Freezable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Constructor } from '../../../../java/lang/reflect/Constructor.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class Relation<K extends unknown, V extends unknown> extends Object implements Freezable<Relation<K, V>> {
    static of(paramarg0: Map<Object | null, (Object | null)[]>, paramarg1: Class<Object>): Relation<Object, Object>;
    static of(paramarg0: Map<Object | null, (Object | null)[]>, paramarg1: Class<Object>, paramarg2: (param0: Object | null, param1: Object | null) => number): Relation<Object, Object>;
    constructor(arg0: Map<K, V[]>, arg1: Class<Object>)
    constructor(arg0: Map<K, V[]>, arg1: Class<Object>, arg2: (param0: V, param1: V) => number)
    // private data: Map<K, V[]>;
    frozen: boolean;
    // private setComparatorParam: Object[];
    // private setCreator: Constructor<V[]>;
    addAllInverted(arg0: Relation<V, K>): Relation<K, V>;
    addAllInverted(arg0: Map<V, K>): Relation<K, V>;
    clear(): void;
    cloneAsThawed(): Relation<K, V>;
    containsKey(arg0: Object): boolean;
    containsValue(arg0: Object): boolean;
    entrySet(): Map$Entry<K, V>[];
    equals(arg0: Object | null): boolean;
    freeze(): Relation<K, V>;
    get(arg0: Object): V[];
    getAll(arg0: Object): V[];
    hashCode(): number;
    isEmpty(): boolean;
    isFrozen(): boolean;
    keySet(): K[];
    keyValueSet(): Map$Entry<K, V>[];
    keyValuesSet(): Map$Entry<K, V[]>[];
    // private newSet(): V[];
    put(arg0: K, arg1: V): V;
    putAll(arg0: Map<K, V>): void;
    putAll(arg0: K, arg1: V[]): V;
    putAll(arg0: Relation<K, V>): void;
    putAll(arg0: K[], arg1: V): V;
    remove(arg0: K, arg1: V): boolean;
    removeAll(arg0: K): V[];
    removeAll(arg0: K, arg1: V[]): boolean;
    removeAll(arg0: Relation<K, V>): boolean;
    removeAll(...arg0: K[]): V[];
    removeAll(arg0: K[]): V[];
    size(): number;
    toString(): string;
    values(): V[];
    values<C extends V[]>(arg0: C): C;
}