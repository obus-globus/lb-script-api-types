import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BooleanPredicate extends Predicate<boolean>, Object {
    and(arg0: (param0: boolean) => boolean): (param0: boolean) => boolean;
    negate(): (param0: boolean) => boolean;
    or(arg0: (param0: boolean) => boolean): (param0: boolean) => boolean;
    test(arg0: boolean): boolean;
}