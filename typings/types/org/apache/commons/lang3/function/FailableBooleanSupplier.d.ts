import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface FailableBooleanSupplier<E extends Throwable> extends Object{
    getAsBoolean(): boolean;
}