import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Constructor } from '../../../../../../../java/lang/reflect/Constructor.d.ts'
import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../../java/util/Map$Entry.d.ts'
import type { Freezable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Freezable.d.ts'
export class Relation<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object implements Freezable<Relation<K, V>> {
    static of(parammap: Map<Object | null, (Object | null)[]>, paramsetCreator: Class<Object>): Relation<Object, Object>;
    static of(parammap: Map<Object | null, (Object | null)[]>, paramsetCreator: Class<Object>, paramsetComparator: (param0: Object) => boolean): Relation<Object, Object>;
    constructor(map: Map<K, V[]>, setCreator: Class<Object>)
    constructor(map: Map<K, V[]>, setCreator: Class<Object>, setComparator: (param0: Object) => boolean)
    // private data: Map<K, V[]>;
    frozen: boolean;
    // private setComparatorParam: Object[];
    // private setCreator: Constructor<V[]>;
    addAllInverted(source: Map<V, K>): Relation<K, V>;
    addAllInverted(source: Relation<V, K>): Relation<K, V>;
    clear(): void;
    cloneAsThawed(): Relation<K, V>;
    containsKey(key: Object): boolean;
    containsValue(value: Object): boolean;
    entrySet(): Map$Entry<K, V>[];
    equals(o: Object | null): boolean;
    freeze(): Relation<K, V>;
    get(key: Object): V[];
    getAll(key: Object): V[];
    hashCode(): number;
    isEmpty(): boolean;
    isFrozen(): boolean;
    keySet(): K[];
    keyValueSet(): Map$Entry<K, V>[];
    keyValuesSet(): Map$Entry<K, V[]>[];
    // private newSet(): V[];
    put(key: K, value: V): V;
    putAll(t: Map<K, V>): void;
    putAll(key: K, values: V[]): V;
    putAll(keys: K[], value: V): V;
    putAll(t: Relation<K, V>): void;
    remove(key: K, value: V): boolean;
    removeAll(key: K): V[];
    removeAll(key: K, toBeRemoved: V[]): boolean;
    removeAll(keys: K[]): V[];
    removeAll(toBeRemoved: K[]): V[];
    removeAll(toBeRemoved: Relation<K, V>): boolean;
    size(): number;
    toString(): string;
    values(): V[];
    values<C extends V[]>(result: C): C;
}