import type { Object } from '../../../java/lang/Object.d.ts'
export interface ToIntBiFunction<T extends Object | number | string | boolean, U extends Object | number | string | boolean> extends Object{
    applyAsInt(arg0: T, arg1: U): number;
}