import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface FailableDoubleSupplier<E extends Throwable> extends Object{
    getAsDouble(): number;
}