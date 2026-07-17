import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../java/lang/Comparable.d.ts'
import type { Map$Entry } from '../../../../../../../java/util/Map$Entry.d.ts'
export class Maps extends Object {
    static immutableEntry<K extends unknown, V extends unknown>(paramarg0: K, paramarg1: V): Map$Entry<K, V>;
    static newTreeMap<K extends Comparable<Object>, V extends unknown>(): JavaMap<K, V>;
}