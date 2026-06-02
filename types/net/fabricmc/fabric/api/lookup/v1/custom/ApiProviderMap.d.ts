import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface ApiProviderMap<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object{
    get(arg0: K): V;
    putIfAbsent(arg0: K, arg1: V): V;
}