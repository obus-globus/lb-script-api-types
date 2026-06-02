import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export interface Functions$FailableBiPredicate<O1 extends Object | number | string | boolean, O2 extends Object | number | string | boolean, T extends Throwable> extends Object{
    test(arg0: O1, arg1: O2): boolean;
}