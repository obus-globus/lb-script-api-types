import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export interface Functions$FailableFunction<I extends unknown, R extends unknown, T extends Throwable> extends Object{
    apply(arg0: I): R;
}