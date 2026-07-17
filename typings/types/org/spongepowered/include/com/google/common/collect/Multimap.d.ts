import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface Multimap<K extends unknown, V extends unknown> extends Object{
    asMap(): JavaMap<K, V[]>;
    get(arg0: K): V[];
    put(arg0: K, arg1: V): boolean;
    removeAll(arg0: Object): V[];
}