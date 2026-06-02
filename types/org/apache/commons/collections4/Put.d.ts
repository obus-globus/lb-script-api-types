import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Put<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object{
    clear(): void;
    put(arg0: K, arg1: V): Object;
    putAll(arg0: Map<K, V>): void;
}