import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface FailableLongPredicate<E extends Throwable> extends Object{
    and(arg0: (param0: E) => kotlin.Boolean): (param0: E) => kotlin.Boolean;
    negate(): (param0: E) => kotlin.Boolean;
    or(arg0: (param0: E) => kotlin.Boolean): (param0: E) => kotlin.Boolean;
    test(arg0: number): boolean;
}