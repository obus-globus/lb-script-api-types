import type { Object2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ReferenceMaps extends Object {
    static EMPTY_MAP: Map<Object | null, Object | null>;
    static emptyMap<K extends unknown, V extends unknown>(): Map<K, V>;
    static fastForEach<K extends unknown, V extends unknown>(paramarg0: Map<K, V>, paramarg1: (param0: Object) => void): void;
    static fastIterable<K extends unknown, V extends unknown>(paramarg0: Map<K, V>): Object2ReferenceMap$Entry<K, V>[];
    static fastIterator<K extends unknown, V extends unknown>(paramarg0: Map<K, V>): ObjectIterator<Object2ReferenceMap$Entry<K, V>>;
    static singleton<K extends unknown, V extends unknown>(paramarg0: K, paramarg1: V): Map<K, V>;
    static synchronize<K extends unknown, V extends unknown>(paramarg0: Map<K, V>): Map<K, V>;
    static synchronize<K extends unknown, V extends unknown>(paramarg0: Map<K, V>, paramarg1: Object): Map<K, V>;
    static unmodifiable<K extends unknown, V extends unknown>(paramarg0: Map<K, V>): Map<K, V>;
    private constructor()
}