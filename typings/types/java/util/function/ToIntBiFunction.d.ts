import type { Object } from '../../../java/lang/Object.d.ts'
export interface ToIntBiFunction<T extends unknown, U extends unknown> extends Object{
    applyAsInt(arg0: T, arg1: U): number;
}