import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface Multimap<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object{
    asMap(): Map<K, E[]>;
    get(arg0: K): E[];
    put(arg0: K, arg1: V): boolean;
    removeAll(arg0: Object): E[];
}