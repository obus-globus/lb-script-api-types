import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface CacheWithNotNullValues<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object{
    computeIfAbsent(arg0: K, arg1: () => V): V;
}