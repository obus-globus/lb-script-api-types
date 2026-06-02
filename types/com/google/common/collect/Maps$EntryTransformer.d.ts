import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Maps$EntryTransformer<K extends Object | number | string | boolean, V1 extends Object | number | string | boolean, V2 extends Object | number | string | boolean> extends Object{
    transformEntry(key: K, value: V1): V2;
}