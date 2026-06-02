import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface FailableToIntBiFunction<T extends Object | number | string | boolean, U extends Object | number | string | boolean, E extends Throwable> extends Object{
    applyAsInt(arg0: T, arg1: U): number;
}