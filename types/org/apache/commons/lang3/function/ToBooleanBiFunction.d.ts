import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ToBooleanBiFunction<T extends Object | number | string | boolean, U extends Object | number | string | boolean> extends Object{
    applyAsBoolean(arg0: T, arg1: U): boolean;
}