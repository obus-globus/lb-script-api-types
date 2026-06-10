import type { LongPredicate as LongPredicate_2 } from '../../../../../../java/util/function/LongPredicate.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface LongPredicate extends LongPredicate_2, Predicate<number>, Object {
    and(arg0: (param0: number) => boolean): (param0: number) => boolean;
    negate(): (param0: number) => boolean;
    or(arg0: (param0: number) => boolean): (param0: number) => boolean;
    test(arg0: number): boolean;
}