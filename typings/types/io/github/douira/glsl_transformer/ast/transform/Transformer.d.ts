import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface Transformer<V extends Object | number | string | boolean> extends Object{
    transform(arg0: V): V;
}