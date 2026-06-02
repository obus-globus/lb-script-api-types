import type { Object } from '../../../java/lang/Object.d.ts'
export interface Conjunctor<T extends Object | number | string | boolean> extends Object{
    and(): T;
}