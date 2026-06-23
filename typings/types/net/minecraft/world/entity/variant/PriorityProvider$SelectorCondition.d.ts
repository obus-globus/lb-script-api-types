import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface PriorityProvider$SelectorCondition<C extends unknown> extends Predicate<C>, Object {
    and(arg0: (param0: C) => boolean): (param0: C) => boolean;
    negate(): (param0: C) => boolean;
    or(arg0: (param0: C) => boolean): (param0: C) => boolean;
}