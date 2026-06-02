import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export interface Functions$FailableFunction<I extends Object | number | string | boolean, R extends Object | number | string | boolean, T extends Throwable> extends Object{
    apply(arg0: I): R;
}