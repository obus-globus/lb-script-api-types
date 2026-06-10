import type { Predicate as Predicate_2 } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Predicate<T extends Object | number | string | boolean> extends Predicate_2<T>, Object {
    and(arg0: (param0: T) => boolean): (param0: T) => boolean;
    apply(input: T): boolean;
    negate(): (param0: T) => boolean;
    or(arg0: (param0: T) => boolean): (param0: T) => boolean;
    test(input: T): boolean;
}