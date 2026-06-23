import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Weigher<K extends unknown, V extends unknown> extends Object{
    weigh(key: K, value: V): number;
}