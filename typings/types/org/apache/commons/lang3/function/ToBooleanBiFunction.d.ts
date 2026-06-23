import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ToBooleanBiFunction<T extends unknown, U extends unknown> extends Object{
    applyAsBoolean(arg0: T, arg1: U): boolean;
}