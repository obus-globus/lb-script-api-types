import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface FailableDoublePredicate<E extends Throwable> extends Object {
    and(arg0: (param0: number) => boolean): (param0: number) => boolean;
    negate(): (param0: number) => boolean;
    or(arg0: (param0: number) => boolean): (param0: number) => boolean;
    test(arg0: number): boolean;
}