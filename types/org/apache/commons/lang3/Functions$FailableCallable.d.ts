import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export interface Functions$FailableCallable<R extends Object | number | string | boolean, T extends Throwable> extends Object{
    call(): R;
}