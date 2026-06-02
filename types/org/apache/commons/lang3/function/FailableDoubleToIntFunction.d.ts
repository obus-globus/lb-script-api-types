import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface FailableDoubleToIntFunction<E extends Throwable> extends Object{
    applyAsInt(arg0: number): number;
}