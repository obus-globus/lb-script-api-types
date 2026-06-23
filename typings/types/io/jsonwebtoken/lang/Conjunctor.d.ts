import type { Object } from '../../../java/lang/Object.d.ts'
export interface Conjunctor<T extends unknown> extends Object{
    and(): T;
}