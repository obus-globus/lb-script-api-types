import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface FailableBiPredicate<T extends Object | number | string | boolean, U extends Object | number | string | boolean, E extends Throwable> extends Object{
    and(arg0: (param0: T, param1: U) => E): (param0: T, param1: U) => E;
    negate(): (param0: T, param1: U) => E;
    or(arg0: (param0: T, param1: U) => E): (param0: T, param1: U) => E;
    test(arg0: T, arg1: U): boolean;
}