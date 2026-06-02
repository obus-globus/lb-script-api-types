import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface FailableLongSupplier<E extends Throwable> extends Object{
    getAsLong(): number;
}