import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface FailableLongToDoubleFunction<E extends Throwable> extends Object{
    applyAsDouble(arg0: number): number;
}