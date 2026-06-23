import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface CacheWithNotNullValues<K extends unknown, V extends unknown> extends Object {
    computeIfAbsent(arg0: K, arg1: () => V): V;
}