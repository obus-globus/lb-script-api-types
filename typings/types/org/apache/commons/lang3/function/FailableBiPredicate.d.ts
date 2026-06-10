import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface FailableBiPredicate<T extends Object | number | string | boolean, U extends Object | number | string | boolean, E extends Throwable> extends Object {
    and(arg0: (param0: T, param1: U) => boolean): (param0: T, param1: U) => boolean;
    negate(): (param0: T, param1: U) => boolean;
    or(arg0: (param0: T, param1: U) => boolean): (param0: T, param1: U) => boolean;
    test(arg0: T, arg1: U): boolean;
}