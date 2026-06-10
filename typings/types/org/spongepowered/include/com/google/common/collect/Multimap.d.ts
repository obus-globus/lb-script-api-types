import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface Multimap<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object{
    asMap(): Map<K, V[]>;
    get(arg0: K): V[];
    put(arg0: K, arg1: V): boolean;
    removeAll(arg0: Object): V[];
}