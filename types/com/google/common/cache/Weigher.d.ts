import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Weigher<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object{
    weigh(key: K, value: V): number;
}