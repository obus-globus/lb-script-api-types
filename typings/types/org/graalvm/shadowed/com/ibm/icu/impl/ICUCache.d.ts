import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface ICUCache<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object{
    clear(): void;
    get(key: Object): V;
    put(key: K, value: V): void;
}