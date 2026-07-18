import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CollectionUtilsKt extends Object {
    static sharedList<V extends unknown>(): V[];
    static sharedListOf<T extends unknown>(...values: T[]): T[];
    static sharedMap<K extends unknown, V extends unknown>(initialCapacity: number): JavaMap<K, V>;
}