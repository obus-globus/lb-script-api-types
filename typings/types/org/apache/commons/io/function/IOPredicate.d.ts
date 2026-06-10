import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface IOPredicate<T extends Object | number | string | boolean> extends Object {
    and(arg0: (param0: T) => boolean): (param0: T) => boolean;
    asPredicate(): (param0: T) => boolean;
    negate(): (param0: T) => boolean;
    or(arg0: (param0: T) => boolean): (param0: T) => boolean;
    test(arg0: T): boolean;
}