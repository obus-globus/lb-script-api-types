import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export interface Functions$FailablePredicate<I extends unknown, T extends Throwable> extends Object{
    test(arg0: I): boolean;
}