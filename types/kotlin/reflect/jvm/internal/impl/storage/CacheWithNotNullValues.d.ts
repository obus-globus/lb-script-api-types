import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Function0 } from '../../../../../../kotlin/jvm/functions/Function0.d.ts'
export interface CacheWithNotNullValues<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object{
    computeIfAbsent(arg0: K, arg1: Function0<V>): V;
}