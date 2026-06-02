import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Monoid<T extends Object | number | string | boolean> extends Object{
    add(arg0: T, arg1: T): T;
    point(): T;
}