import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CreateMapForCacheKt extends Object {
    static createMapForCache<K extends unknown, V extends unknown>(initialCapacity: number): JavaMap<K, V>;
}