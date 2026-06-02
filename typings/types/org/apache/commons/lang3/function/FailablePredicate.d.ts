import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface FailablePredicate<T extends Object | number | string | boolean, E extends Throwable> extends Object{
    and(arg0: (param0: T) => E): (param0: T) => E;
    negate(): (param0: T) => E;
    or(arg0: (param0: T) => E): (param0: T) => E;
    test(arg0: T): boolean;
}