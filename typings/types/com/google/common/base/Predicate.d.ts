import type { Predicate as Predicate_2 } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Predicate<T extends Object | number | string | boolean> extends Predicate_2<T>, Object {
    and(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    apply(input: T): boolean;
    negate(): (param0: T) => kotlin.Boolean;
    or(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    test(input: T): boolean;
}