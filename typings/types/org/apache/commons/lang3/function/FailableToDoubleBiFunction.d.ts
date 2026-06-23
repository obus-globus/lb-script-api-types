import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface FailableToDoubleBiFunction<T extends unknown, U extends unknown, E extends Throwable> extends Object{
    applyAsDouble(arg0: T, arg1: U): number;
}