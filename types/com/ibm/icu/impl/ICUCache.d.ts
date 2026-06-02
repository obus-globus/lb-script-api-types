import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ICUCache<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object{
    clear(): void;
    get(arg0: Object): V;
    put(arg0: K, arg1: V): void;
}