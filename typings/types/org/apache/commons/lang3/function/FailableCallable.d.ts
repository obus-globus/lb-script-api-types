import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface FailableCallable<R extends unknown, E extends Throwable> extends Object{
    call(): R;
}