import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface FailableDoubleFunction<R extends unknown, E extends Throwable> extends Object{
    apply(arg0: number): R;
}