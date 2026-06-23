import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface ApiProviderMap<K extends unknown, V extends unknown> extends Object{
    get(arg0: K): V;
    putIfAbsent(arg0: K, arg1: V): V;
}