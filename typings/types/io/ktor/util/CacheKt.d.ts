import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CacheKt extends Object {
    static createLRUCache<K extends unknown, V extends unknown>(supplier: (param0: K) => V, close: (param0: V) => void, maxSize: number): JavaMap<K, V>;
}