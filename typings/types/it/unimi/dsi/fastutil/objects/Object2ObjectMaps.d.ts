import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ObjectMaps extends Object {
    static EMPTY_MAP: JavaMap<Object | null, Object | null>;
    static emptyMap<K extends unknown, V extends unknown>(): JavaMap<K, V>;
    static fastForEach<K extends unknown, V extends unknown>(paramarg0: JavaMap<K, V>, paramarg1: (param0: Object) => void): void;
    static fastIterable<K extends unknown, V extends unknown>(paramarg0: JavaMap<K, V>): Object2ObjectMap$Entry<K, V>[];
    static fastIterator<K extends unknown, V extends unknown>(paramarg0: JavaMap<K, V>): ObjectIterator<Object2ObjectMap$Entry<K, V>>;
    static singleton<K extends unknown, V extends unknown>(paramarg0: K, paramarg1: V): JavaMap<K, V>;
    static synchronize<K extends unknown, V extends unknown>(paramarg0: JavaMap<K, V>): JavaMap<K, V>;
    static synchronize<K extends unknown, V extends unknown>(paramarg0: JavaMap<K, V>, paramarg1: Object): JavaMap<K, V>;
    static unmodifiable<K extends unknown, V extends unknown>(paramarg0: JavaMap<K, V>): JavaMap<K, V>;
    private constructor()
}