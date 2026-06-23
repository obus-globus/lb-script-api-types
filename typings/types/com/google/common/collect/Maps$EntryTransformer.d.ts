import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Maps$EntryTransformer<K extends unknown, V1 extends unknown, V2 extends unknown> extends Object{
    transformEntry(key: K, value: V1): V2;
}