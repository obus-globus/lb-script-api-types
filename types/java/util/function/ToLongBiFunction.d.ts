import type { Object } from '../../../java/lang/Object.d.ts'
export interface ToLongBiFunction<T extends Object | number | string | boolean, U extends Object | number | string | boolean> extends Object{
    applyAsLong(arg0: T, arg1: U): number;
}