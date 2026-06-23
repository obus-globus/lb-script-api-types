import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface ICUCache<K extends unknown, V extends unknown> extends Object{
    clear(): void;
    get(key: Object): V;
    put(key: K, value: V): void;
}