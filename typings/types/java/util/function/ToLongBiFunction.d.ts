import type { Object } from '../../../java/lang/Object.d.ts'
export interface ToLongBiFunction<T extends unknown, U extends unknown> extends Object{
    applyAsLong(arg0: T, arg1: U): number;
}