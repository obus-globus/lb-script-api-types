import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceMap$Entry.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ReferenceSortedMaps extends Object {
    static EMPTY_MAP: JavaMap<Object | null, Object | null>;
    static emptyMap<K extends unknown, V extends unknown>(): JavaMap<K, V>;
    static entryComparator<K extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Object, param1: Object) => number;
    static fastIterable<K extends unknown, V extends unknown>(paramarg0: JavaMap<K, V>): Object2ReferenceMap$Entry<K, V>[];
    static fastIterator<K extends unknown, V extends unknown>(paramarg0: JavaMap<K, V>): ObjectBidirectionalIterator<Object2ReferenceMap$Entry<K, V>>;
    static singleton<K extends unknown, V extends unknown>(paramarg0: K, paramarg1: V): JavaMap<K, V>;
    static singleton<K extends unknown, V extends unknown>(paramarg0: K, paramarg1: V, paramarg2: (param0: Object, param1: Object) => number): JavaMap<K, V>;
    static synchronize<K extends unknown, V extends unknown>(paramarg0: JavaMap<K, V>): JavaMap<K, V>;
    static synchronize<K extends unknown, V extends unknown>(paramarg0: JavaMap<K, V>, paramarg1: Object): JavaMap<K, V>;
    static unmodifiable<K extends unknown, V extends unknown>(paramarg0: JavaMap<K, V>): JavaMap<K, V>;
    private constructor()
}