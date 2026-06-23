import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface Transformer<V extends unknown> extends Object{
    transform(arg0: V): V;
}