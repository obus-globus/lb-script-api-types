import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface FailablePredicate<T extends unknown, E extends Throwable> extends Object {
    and(arg0: (param0: T) => boolean): (param0: T) => boolean;
    negate(): (param0: T) => boolean;
    or(arg0: (param0: T) => boolean): (param0: T) => boolean;
    test(arg0: T): boolean;
}